import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import {
  deleteQuestion,
  setFormDescription,
  setFormTitle,
} from "../../app/store/slices/formBuilderSlice";
import { QuestionModal } from "./components/QuestionModal";
import { type Question } from "../../app/api/generatedApi";
import { CreateFormButton } from "./components/CreateFormButton";

export const FormBuilderPage = () => {
  const dispatch = useAppDispatch();
  const { title, description, questions } = useAppSelector(
    (s) => s.formBuilder,
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingQuestion, setEditingQuestion] = useState<
    Question | undefined
  >();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEditQuestion = (question: Question) => {
    setEditingQuestion(question);
    setIsModalOpen(true);
  };

  const handleAddQuestion = () => {
    setEditingQuestion(undefined);
    setIsModalOpen(true);
  };

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
          <button onClick={() => handleEditQuestion(question)}>edit</button>
          <button onClick={() => dispatch(deleteQuestion(question.id))}>
            delete
          </button>
        </div>
      ))}
      <button onClick={handleAddQuestion}>Add question</button>
      {isModalOpen && (
        <QuestionModal closeModal={closeModal} question={editingQuestion} />
      )}

      <CreateFormButton />
    </div>
  );
};
