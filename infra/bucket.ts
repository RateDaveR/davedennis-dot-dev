import { domain } from "./dns";

export const bucket = new sst.aws.Bucket("CDNBucket", {
    access: "cloudfront",
});

    const router = new sst.aws.Router("CDNBucketRouter", {
      domain: `cdn.${domain}`,
        routes: {
        "/*": {
          bucket,
          rewrite: { regex: "^/(.*)$", to: "/public/$1" },
        },
      },
    });

export const outputs = {
    cdnUrl: router.url
};
