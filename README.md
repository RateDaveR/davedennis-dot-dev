---

Welcome to my online footprint. You can vist it [_here_](https://davedennis.dev). Buit for fun becasue "I wanted to start writing, so of course, I need a custom framework".

[nix-shell:~/workspace/github/davedennis-dot-dev]$ curl -X POST "https://api.dev.davedennis.dev/createpost" -H "Content-Type: application/json" -d '{"pk":"post-1","sk":"user-123"}'
{"error":{"message":"Authorization key missing","code":-32001,"data":{"code":"UNAUTHORIZED","httpStatus":401,"stack":"TRPCError: Authorization key missing\n    at file:///var/task/bundle.mjs:7185:11\n    at callRecursive (file:///var/task/bundle.mjs:6891:26)\n    at procedure (file:///var/task/bundle.mjs:6923:26)\n    at file:///var/task/bundle.mjs:6106:28\n    at Array.map (<anonymous>)\n    at resolveResponse (file:///var/task/bundle.mjs:6080:33)\n    at async Runtime.handler (file:///var/task/bundle.mjs:6574:22)","path":"createpost"}}}

curl -X POST "https://api.dev.davedennis.dev/createpost" -H "Content-Type: application/json" -d '{"pk":"post-1","sk":"user-123"}' -H "Authorization: auth1234!
