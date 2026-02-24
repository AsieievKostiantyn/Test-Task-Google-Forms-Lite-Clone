import type { Question } from "../../../app/api/generatedApi";

export const mapQuestionsToInput = (questions: Question[]) =>
  questions.map((question) => {
    return {
      title: question.title,
      type: question.type,
      options: question.options,
    };
  });
