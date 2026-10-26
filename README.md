# mastra-dotted-paths-repro

`mastra build` (with `@mastra/deployer` 1.79.0) cannot resolve a tsconfig `paths` import when the target file name contains a dot (`greeting.service.ts`) and the import has no extension.

```sh
npm install
npm run build
grep -n "src/mastra/repositories" .mastra/output/index.mjs   # import is left as an external package import
grep -n '"src"' .mastra/output/package.json                  # unrelated npm package "src" is added with "latest"
npm start                                                    # ERR_MODULE_NOT_FOUND
```

Renaming `greeting.service.ts` to `greeting-service.ts` (and updating the import) makes the build work.
