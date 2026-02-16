import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000",
  documents: "./src/gql/documents/**/*.gql",
  generates: {
    "./src/app/api/generatedApi.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        {
          "typescript-rtk-query": {
            importBaseApiFrom: "./baseApi",
            exportHooks: true,
          },
        },
      ],
    },
  },
};

export default config;
