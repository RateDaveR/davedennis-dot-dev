import { z } from "zod";
import {
  awsLambdaRequestHandler,
  CreateAWSLambdaContextOptions
} from "@trpc/server/adapters/aws-lambda";
import { initTRPC, TRPCError } from "@trpc/server";
import { APIGatewayProxyEvent, APIGatewayProxyEventV2 } from "aws-lambda";

const t = initTRPC
  .context<CreateAWSLambdaContextOptions<APIGatewayProxyEvent | APIGatewayProxyEventV2>>()
  .create();

// Middleware to check for the authorization key
const authMiddleware = t.middleware(({ ctx, next }) => {
  console.log(`ctx is ${JSON.stringify(ctx)}`);
  const authKey = ctx.event.headers['authorization']; // Read the `authorization` header
  console.log(`key is ${authKey}`);
  
   if (!authKey) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Authorization key missing",
    });
  }

  if (authKey !== "auth1234!") {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Invalid authorization key",
    });
  }

  return next();
});

// Protected procedure
const protectedProcedure = t.procedure.use(authMiddleware);

const router = t.router({
  greet: t.procedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Hello ${input.name}!`;
    }),
  createpost: protectedProcedure
    .input(z.object({
      pk: z.string(),
      sk: z.string(),
    }))
    .mutation(({ input }) => {
      // Return the pk and sk back to the user
      return {
        pk: input.pk,
        sk: input.sk,
      };
    }),
});

export type Router = typeof router;

export const handler = awsLambdaRequestHandler({
  router: router,
  createContext: (opts) => opts,
});
