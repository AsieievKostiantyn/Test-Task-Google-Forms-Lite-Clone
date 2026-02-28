import { api } from "./generatedApi";

export const enhancedApi = api.enhanceEndpoints({
  addTagTypes: ["forms"],
  endpoints: {
    FormsShortView: {
      providesTags: ["forms"],
    },
    CreateForm: {
      invalidatesTags: ["forms"],
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
} = enhancedApi;
