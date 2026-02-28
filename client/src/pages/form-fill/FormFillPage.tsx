import { useFormId } from "../../shared/hooks/useFormId";
import { useFormByIdQuery } from "../../app/api/enhancedApi";
import { FormHeader } from "./components/FormHeader";
import { QuestionRenderer } from "./components/QuestionRenderer";
import { SubmitAnswersButton } from "./components/SubmitAnswersButton";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { useEffect } from "react";
import { initializeForm } from "../../app/store/slices/formFillSlice";

export const FormFillPage = () => {
  const dispatch = useAppDispatch();
  const formId = useFormId();
  const { data, isLoading, isError } = useFormByIdQuery({ id: formId });
  const formFillState = useAppSelector((s) => s.formFill);
  console.log("formFillState", formFillState);

  useEffect(() => {
    if (formId) {
      dispatch(initializeForm({ formId }));
    }
  }, [formId]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;
  if (!data?.form) return <div>Form not found</div>;

  const form = data?.form;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <FormHeader title={form.title} description={form.description} />

      {form.questions.map((question, index) => (
        <div
          key={question.id}
          style={{ display: "flex", gap: "10px", marginTop: "10px" }}
        >
          {index + 1}
          <QuestionRenderer key={question.id} question={question} />
        </div>
      ))}

      <SubmitAnswersButton formId={formId} />
    </div>
  );
};
