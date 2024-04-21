import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  outDir: "dist",
  splitting: false,
  clean: true,
  noExternal: [/@workspace/],
});
