import { domain } from "./dns";
import { table } from "./table";

const trpc = new sst.aws.Function("Trpc", {
    url: true,
    handler: "./packages/functions/src/api/index.handler",
    link: [ table ],
    environment: {
        DYNAMODB_TABLE_NAME: table.name,
    }
});

export const apiRouter = new sst.aws.Router("ApiRouter", {
  domain: "api." + domain,
  routes: { "/*": trpc.url },
});

export const outputs = {
    api: apiRouter.url,
};
