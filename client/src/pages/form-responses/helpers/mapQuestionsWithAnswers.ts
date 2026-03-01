import type { Answer, Question } from "../../../app/api/generatedApi";

export type QuestionWithAnswer = {
  id: string;
  title: string;
  value: string | undefined;
};

export const mapQuestionWithAnswers = (
  questions: Question[],
  answers: Answer[],
): QuestionWithAnswer[] => {
  const answersMap = new Map(answers.map((a) => [a.questionId, a]));

  return questions.map((q) => ({
    id: q.id,
    title: q.title,
    value: answersMap.get(q.id)?.value,
  }));
};
