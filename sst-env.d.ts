/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */
import "sst"
export {}
declare module "sst" {
  export interface Resource {
    "ApiRouter": {
      "type": "sst.aws.Router"
      "url": string
    }
    "CDNBucket": {
      "name": string
      "type": "sst.aws.Bucket"
    }
    "CDNBucketRouter": {
      "type": "sst.aws.Router"
      "url": string
    }
    "Table": {
      "name": string
      "type": "sst.aws.Dynamo"
    }
    "Trpc": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
    "WebApp": {
      "type": "sst.aws.Nextjs"
      "url": string
    }
  }
}
