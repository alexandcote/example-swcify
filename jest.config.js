module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  cacheDirectory: "./cache",
  setupFilesAfterEnv: ["./setup.js"],
  transform: {
    "\\.jsx?$": [
      "@shopify/swcify/jest",
      {
        module: {
          type: "commonjs",
        },
        jsc: {
          parser: {
            jsx: true,
            decorators: true,
            dynamicImport: true,
            syntax: "ecmascript",
          },
        },
      },
    ],
    "\\.esnext$": [
      "@shopify/swcify/jest",
      {
        module: { type: "commonjs" },
        jsc: {
          parser: {
            jsx: true,
            decorators: true,
            dynamicImport: true,
            syntax: "ecmascript",
          },
        },
      },
    ],
    "\\.tsx?$": [
      "@shopify/swcify/jest",
      {
        module: { type: "commonjs" },
        jsc: {
          parser: {
            tsx: true,
            decorators: true,
            dynamicImport: true,
            syntax: "typescript",
          },
        },
      },
    ],
  },
};
