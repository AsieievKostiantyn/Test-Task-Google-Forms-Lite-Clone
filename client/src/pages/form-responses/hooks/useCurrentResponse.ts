import { useParams } from "react-router";
import { useFormId } from "../../../shared/hooks/useFormId";
import { useFormWithResponsesQuery } from "../../../app/api/enhancedApi";

export const useCurrentResponse = () => {
  const formId = useFormId();
  const { responseId } = useParams<{ responseId: string }>();

  const { data } = useFormWithResponsesQuery({ formId }, { skip: !formId });
  if (!data) throw new Error("Fetching error");
  if (!data.form) throw new Error("Form not found");

  const responses = data.responses;
  const form = data.form;

  const currentResponse = responses.find(
    (response) => response.id === responseId,
  );
  if (!currentResponse) throw new Error("Response not found");

  return {
    form,
    response: currentResponse,
  };
};
