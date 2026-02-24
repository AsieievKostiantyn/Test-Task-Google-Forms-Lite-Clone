import { createApi } from "@reduxjs/toolkit/query/react";
import { GraphQLClient } from "graphql-request";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";

export const client = new GraphQLClient("http://localhost:4000");

export const api = createApi({
  reducerPath: "api",
  baseQuery: graphqlRequestBaseQuery({ client }),
  tagTypes: ["forms"],
  endpoints: () => ({}),
});
