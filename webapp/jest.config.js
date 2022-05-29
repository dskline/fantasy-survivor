const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testMatch: ["<rootDir>/**/*.spec.{ts,tsx,js,jsx}"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.dbClient.js"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
