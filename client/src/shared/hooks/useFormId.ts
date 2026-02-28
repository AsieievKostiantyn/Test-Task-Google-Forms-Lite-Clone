import { useParams } from "react-router";

export const useFormId = () => {
  const { formId } = useParams();

  if (!formId) throw new Error("Required route param formId is missing");

  return formId;
};
