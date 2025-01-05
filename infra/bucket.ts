import { domain } from "./dns";

export const bucket = new sst.aws.Bucket("CDNBucket", {
    access: "cloudfront",
});

/** uploading content to the cdn that we are keeping locally. */
new aws.s3.BucketObjectv2("PublicKeyTxtUpload", {
    bucket: bucket.name,
    key: "public/public-key.txt",
    contentType: "text/plain",
    source: $asset("./cdn-content/public/public-key.txt"),
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
    cdnUrl: router.url,
    image: $interpolate`${router.url}/public-key.txt`,
};
