import { api } from "./baseApi";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Answer = {
  __typename?: "Answer";
  questionId: Scalars["ID"]["output"];
  value: Scalars["String"]["output"];
};

export type AnswerInput = {
  questionId: Scalars["ID"]["input"];
  value: Scalars["String"]["input"];
};

export type Form = {
  __typename?: "Form";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  questions: Array<Question>;
  title: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createForm: Form;
  submitResponse: Response;
};

export type MutationCreateFormArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  questions?: InputMaybe<Array<QuestionInput>>;
  title: Scalars["String"]["input"];
};

export type MutationSubmitResponseArgs = {
  answers: Array<AnswerInput>;
  formId: Scalars["ID"]["input"];
};

export type Query = {
  __typename?: "Query";
  form?: Maybe<Form>;
  forms: Array<Form>;
  responses: Array<Response>;
};

export type QueryFormArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryResponsesArgs = {
  formId: Scalars["ID"]["input"];
};

export type Question = {
  __typename?: "Question";
  id: Scalars["ID"]["output"];
  options?: Maybe<Array<Scalars["String"]["output"]>>;
  title: Scalars["String"]["output"];
  type: QuestionType;
};

export type QuestionInput = {
  options?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title: Scalars["String"]["input"];
  type: QuestionType;
};

export enum QuestionType {
  Checkbox = "CHECKBOX",
  Date = "DATE",
  MultipleChoice = "MULTIPLE_CHOICE",
  Text = "TEXT",
}

export type Response = {
  __typename?: "Response";
  answers: Array<Answer>;
  formId: Scalars["ID"]["output"];
  id: Scalars["ID"]["output"];
};

export type ExampleQueryQueryVariables = Exact<{ [key: string]: never }>;

export type ExampleQueryQuery = {
  __typename?: "Query";
  forms: Array<{ __typename?: "Form"; id: string }>;
};

export const ExampleQueryDocument = `
    query ExampleQuery {
  forms {
    id
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    ExampleQuery: build.query<
      ExampleQueryQuery,
      ExampleQueryQueryVariables | void
    >({
      query: (variables) => ({ document: ExampleQueryDocument, variables }),
    }),
  }),
});

export { injectedRtkApi as api };
export const { useExampleQueryQuery, useLazyExampleQueryQuery } =
  injectedRtkApi;
