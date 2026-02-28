import { useAppDispatch, useAppSelector } from "../../../../app/store";
import { setAnswer } from "../../../../app/store/slices/formFillSlice";
import type { BaseQuestionProps } from "../../types/baseQuestionPropsType";

type CheckboxQuestionProps = BaseQuestionProps;

export const CheckboxQuestion = ({ question }: CheckboxQuestionProps) => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(
    (s) => (s.formFill.answers[question.id] as string[]) ?? [],
  );

  if (!question.options || question.options.length === 0) return null;

  const toggleOption = (option: string) => {
    const updatedValue = value.includes(option)
      ? value.filter((v) => v !== option)
      : [...value, option];

    dispatch(setAnswer({ questionId: question.id, value: updatedValue }));
  };

  return (
    <div>
      <p>{question.title}</p>

      {question.options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={(e) => toggleOption(e.target.value)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};
