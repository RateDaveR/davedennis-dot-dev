import { z } from "zod";
import {
    awsLambdaRequestHandler,
    CreateAWSLambdaContextOptions,
} from "@trpc/server/adapters/aws-lambda";
import { initTRPC, TRPCError } from "@trpc/server";
import { APIGatewayProxyEvent, APIGatewayProxyEventV2 } from "aws-lambda";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const ddbClient = new DynamoDBClient({ region: "us-east-1" });
const docClient = DynamoDBDocumentClient.from(ddbClient);

const t = initTRPC
    .context<CreateAWSLambdaContextOptions<APIGatewayProxyEvent | APIGatewayProxyEventV2>>()
    .create();

const authMiddleware = t.middleware(({ ctx, next }) => {
    const authKey = ctx.event.headers["authorization"];
    if (!authKey || authKey !== "auth1234!") {
        throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Invalid or missing authorization key",
        });
    }
    return next();
});

const protectedProcedure = t.procedure.use(authMiddleware);

const router = t.router({
    greet: t.procedure
        .input(z.object({ name: z.string() }))
        .query(({ input }) => {
            return `Hello ${input.name}!`;
        }),
    createpost: protectedProcedure
        .input(
            z.object({
                pk: z.string(),
                sk: z.string(),
                title: z.string(),
                contentSummary: z.string().optional(),
                contentUrl: z.string().optional(),
                tags: z.array(z.string()).optional(),
                category: z.string().optional(),
                status: z.string().optional(),
                publishDate: z.string(),
                readtime: z.number(),
            })
        )
        .mutation(async ({ input, ctx }) => {
            const tableName = process.env.DYNAMODB_TABLE_NAME;
            if (!tableName) {
                throw new TRPCError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: "DynamoDB table name not configured",
                });
            }

            try {
                await docClient.send(
                    new PutCommand({
                        TableName: tableName,
                        Item: {
                            pk: input.pk,
                            sk: input.sk,
                            title: input.title,
                            contentSummary: input.contentSummary || null,
                            contentUrl: input.contentUrl || null,
                            tags: input.tags || [],
                            category: input.category || null,
                            status: input.status || null,
                            publishDate: input.publishDate,
                            readtime: input.readtime,
                            likes: 0,
                            views: 0,
                            commentCount: 0,
                            isActive: true,
                            createdAt: new Date().toISOString(),
                        },
                    })
                );
                return { success: true, pk: input.pk, sk: input.sk, title: input.title };
            } catch (err) {
                console.error("DynamoDB error:", err);
                throw new TRPCError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: "Failed to write to DynamoDB",
                });
            }
        }),
});

// Export router and handler
export type Router = typeof router;

export const handler = awsLambdaRequestHandler({
    router: router,
    createContext: (opts) => ({
        ...opts,
        docClient,
    }),
});

