import { useNavigate } from "react-router";
import { useCreateFormMutation } from "../../../app/api/enhancedApi";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { resetBuilder } from "../../../app/store/slices/formBuilderSlice";
import { mapQuestionsToInput } from "../helpers/mapQuestionsToInput";
import { ROUTES } from "../../../router";

export const CreateFormButton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { title, description, questions } = useAppSelector(
    (s) => s.formBuilder,
  );

  const [createForm, { isLoading }] = useCreateFormMutation();

  const handleCreateForm = async () => {
    try {
      await createForm({
        title,
        description,
        questions: mapQuestionsToInput(questions),
      }).unwrap();

      dispatch(resetBuilder());
      navigate(ROUTES.HOME_PAGE);
    } catch {
      alert("Something went wrong");
    }
  };

  return (
    <button onClick={handleCreateForm} disabled={isLoading}>
      Create form
    </button>
  );
};
