module.exports = {
  root: true,
  extends: ["@frontendlive", "next"],
  ignorePatterns: ["**/__generated__", "schema.ts"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {
    react: {
      version: "detect",
    },
    polyfills: ["fetch"],
  },
};
