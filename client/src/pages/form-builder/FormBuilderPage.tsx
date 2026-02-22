import { useAppDispatch, useAppSelector } from "../../app/store";
import {
  setFormDescription,
  setFormTitle,
} from "../../app/store/slices/formBuilderSlice";

export const FormBuilderPage = () => {
  const { title, description, questions } = useAppSelector(
    (s) => s.formBuilder,
  );
  const dispatch = useAppDispatch();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "400px",
      }}
    >
      <div>
        <label htmlFor="title">Form title</label>
        <input
          type="title"
          value={title}
          onChange={(e) => dispatch(setFormTitle(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="description">Form description</label>
        <input
          type="description"
          value={description}
          onChange={(e) => dispatch(setFormDescription(e.target.value))}
        />
      </div>
      {questions.map((question) => (
        <div key={question.id}>
          {question.title}
          <button>edit</button>
          <button>delete</button>
        </div>
      ))}
      <button>Add question</button>
    </div>
  );
};
