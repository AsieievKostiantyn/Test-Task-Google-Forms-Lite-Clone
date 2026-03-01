import { api } from "./generatedApi";

export const enhancedApi = api.enhanceEndpoints({
  addTagTypes: ["forms"],
  endpoints: {
    FormsShortView: {
      providesTags: ["forms"],
    },
    FormWithResponses: {
      providesTags: ["responses"],
    },
    CreateForm: {
      invalidatesTags: ["forms"],
    },
    SubmitResponse: {
      invalidatesTags: ["responses"],
    },
  },
});

export const {
  useCreateFormMutation,
  useFormsShortViewQuery,
  useLazyFormsShortViewQuery,
  useFormByIdQuery,
  useLazyFormByIdQuery,
  useSubmitResponseMutation,
  useFormWithResponsesQuery,
  useLazyFormWithResponsesQuery,
} = enhancedApi;
