---

Welcome to my online footprint. You can vist it [_here_](https://davedennis.dev). Buit for fun becasue "I wanted to start writing, so of course, I need a custom framework".

[nix-shell:~/workspace/github/davedennis-dot-dev]$ curl -X POST "https://api.dev.davedennis.dev/createpost" -H "Content-Type: application/json" -d '{"pk":"post-1","sk":"user-123"}'
{"error":{"message":"Authorization key missing","code":-32001,"data":{"code":"UNAUTHORIZED","httpStatus":401,"stack":"TRPCError: Authorization key missing\n    at file:///var/task/bundle.mjs:7185:11\n    at callRecursive (file:///var/task/bundle.mjs:6891:26)\n    at procedure (file:///var/task/bundle.mjs:6923:26)\n    at file:///var/task/bundle.mjs:6106:28\n    at Array.map (<anonymous>)\n    at resolveResponse (file:///var/task/bundle.mjs:6080:33)\n    at async Runtime.handler (file:///var/task/bundle.mjs:6574:22)","path":"createpost"}}}

curl -X POST "https://api.dev.davedennis.dev/createpost" -H "Content-Type: application/json" -d '{"pk":"post-1","sk":"user-123"}' -H "Authorization: auth1234!

curl -X POST "https://api.dev.davedennis.dev/trpc/createpost" \
-H "Content-Type: application/json" \
-H "Authorization: auth1234!" \
-d '{
  "input": {
    "pk": "WRITING#deploying-go-cli-to-npm",
    "sk": "METADATA#2024-08-07",
    "title": "Deploying a Go CLI to npm",
    "contentSummary": " want to build a CLI tool similar to `npx create-xyz@latest`, but I don't want most of my logic in TypeScript because it lacks support for templating. Python has good support with the [*copier framework*](https://copier.readthedocs.io/en/stable/), but Go, with its robust templating support through `text/template` and `html/template` packages, is my preferred choice for creating a flexible and powerful CLI tool.",
    "contentUrl": "https://blog.davedennis.dev/deploying-go-cli-to-npm",
    "tags": ["Go", "CLI", "npm", "JavaScript"],
    "category": "Tech",
    "status": "published",
    "publishDate": "2024-08-07",
    "readtime": 30
  }
}'

