import { useNavigate } from "react-router";
import { useSubmitResponseMutation } from "../../../app/api/enhancedApi";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { resetForm } from "../../../app/store/slices/formFillSlice";
import { mapAnswersToInput } from "../helpers/mapAnswersToInput";
import { ROUTES } from "../../../router";

export const SubmitAnswersButton = ({ formId }: { formId: string }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [submitResponses, { isLoading }] = useSubmitResponseMutation();
  const answers = useAppSelector((s) => s.formFill.answers);

  const handleSubmit = async () => {
    try {
      await submitResponses({
        formId,
        answers: mapAnswersToInput(answers),
      }).unwrap();

      alert("Form submitted successfully!");
      dispatch(resetForm());
      navigate(ROUTES.HOME_PAGE);
    } catch {
      alert("Something went wrong.");
    }
  };
  return (
    <button onClick={handleSubmit} disabled={isLoading}>
      Submit
    </button>
  );
};
