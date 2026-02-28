import { useAppDispatch, useAppSelector } from "../../../../app/store";
import { setAnswer } from "../../../../app/store/slices/formFillSlice";
import type { BaseQuestionProps } from "../../types/baseQuestionPropsType";

type MultipleChoiceQuestionProps = BaseQuestionProps;

export const MultipleChoiceQuestion = ({
  question,
}: MultipleChoiceQuestionProps) => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((s) => s.formFill.answers[question.id] ?? "");

  if (!question.options || question.options.length === 0) return null;

  return (
    <div>
      <p>{question.title}</p>

      {question.options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={question.id}
            value={option}
            checked={value === option}
            onChange={(e) =>
              dispatch(
                setAnswer({ questionId: question.id, value: e.target.value }),
              )
            }
          />
          {option}
        </label>
      ))}
    </div>
  );
};
