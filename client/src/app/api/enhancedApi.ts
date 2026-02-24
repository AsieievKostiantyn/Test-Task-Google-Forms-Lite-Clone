import { injectedRtkApi } from "./generatedApi";

export const enhancedApi = injectedRtkApi.enhanceEndpoints({
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

export { enhancedApi as api };
export const {
  useCreateFormMutation,
  useFormsShortViewQuery,
  useLazyFormsShortViewQuery,
} = enhancedApi;
