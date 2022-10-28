import path from "node:path";
import * as url from "node:url";

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globalSetup: process.env.VITE_SEED_DB
      ? path.resolve(
          path.dirname(url.fileURLToPath(import.meta.url)),
          "./__tests__/seed.ts"
        )
      : undefined,
  },
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "."),
    },
  },
  envPrefix: ["NEXT_", "VITE_"],
});
