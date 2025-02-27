import { domain } from "./dns";

console.log(`DOMAIN IS ${domain}`);
  
export const web = new sst.aws.Nextjs("WebApp", {
  path: "packages/web",
  domain: {
    name: domain,
    redirects: ["www." + domain],
  },
  environment: {},
});

export const outputs = {
  web: web.url,
};