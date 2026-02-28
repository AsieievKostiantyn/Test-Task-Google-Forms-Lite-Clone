import { useAppDispatch, useAppSelector } from "../../../../app/store";
import { setAnswer } from "../../../../app/store/slices/formFillSlice";
import type { BaseQuestionProps } from "../../types/baseQuestionPropsType";

type TextQuestionProps = BaseQuestionProps;

export const TextQuestion = ({ question }: TextQuestionProps) => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((s) => s.formFill.answers[question.id]) ?? "";

  return (
    <div>
      <label>
        <input
          type="text"
          value={value}
          onChange={(e) =>
            dispatch(
              setAnswer({ questionId: question.id, value: e.target.value }),
            )
          }
        />
        {question.title}
      </label>
    </div>
  );
};
