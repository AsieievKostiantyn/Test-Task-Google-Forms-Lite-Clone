import { useState } from "react";
import { QuestionType, type Question } from "../../../app/api/generatedApi";
import { OptionsEditor } from "./OptionsEditor";
import { useAppDispatch } from "../../../app/store";
import {
  addQuestion,
  updateQuestion,
} from "../../../app/store/slices/formBuilderSlice";

interface QuestionModalProps {
  closeModal: () => void;
  question?: Question;
}

export const QuestionModal = ({ closeModal, question }: QuestionModalProps) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>(question?.title || "");
  const [type, setType] = useState<QuestionType>(
    question?.type || QuestionType.Text,
  );
  const [options, setOptions] = useState<string[]>(question?.options || [""]);

  const hasOptions = type === "CHECKBOX" || type === "MULTIPLE_CHOICE";

  const handleSaveQuestion = () => {
    dispatch(addQuestion({ title, type, options }));
    closeModal();
  };

  const handleEditQuestion = () => {
    if (!question) return;
    dispatch(updateQuestion({ id: question.id, title, type, options }));
    closeModal();
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          content: "",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "rgba(255, 255, 255)",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>Question</h3>
          <button onClick={closeModal}>X</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="title">Question title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            name="options"
            value={type}
            onChange={(e) => setType(e.target.value as QuestionType)}
          >
            {Object.values(QuestionType).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          {hasOptions && (
            <OptionsEditor options={options} setOptions={setOptions} />
          )}
          <button onClick={question ? handleEditQuestion : handleSaveQuestion}>
            Save question
          </button>
        </div>
      </div>
    </>
  );
};
