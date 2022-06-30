import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  // @ts-ignore
  test: {
    globalSetup: process.env.VITE_SEED_DB
      ? path.resolve(__dirname, "./__tests__/seed.ts")
      : undefined,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  envPrefix: ['NEXT_', 'VITE_'],
});
