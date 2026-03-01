import type { Answers } from "../../../app/store/slices/formFillSlice";

export const mapAnswersToInput = (answers: Answers) => {
  return Object.entries(answers).map(([questionId, value]) => ({
    questionId,
    value: Array.isArray(value) ? value.join(", ") : value,
  }));
};
