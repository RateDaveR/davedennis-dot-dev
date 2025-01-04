import { domain } from "./dns";

const trpc = new sst.aws.Function("Trpc", {
    url: true,
    handler: "./packages/functions/src/api/index.handler",
});

const client = new sst.aws.Function("Client", {
    url: true,
    link: [trpc],
    handler: "./packages/functions/src/api/client.handler",
});

export const apiRouter = new sst.aws.Router("ApiRouter", {
  domain: "api." + domain,
  routes: { "/*": trpc.url },
});

export const outputs = {
    api: apiRouter.url,
};
