import { QuestionType, type Question } from "../../../app/api/generatedApi";
import { CheckboxQuestion } from "./question-components/CheckboxQuestion";
import { DateQuestion } from "./question-components/DateQuestion";
import { MultipleChoiceQuestion } from "./question-components/MultipleChoiceQuestion";
import { TextQuestion } from "./question-components/TextQuestion";

interface QuestionRendererProps {
  question: Question;
}

export const QuestionRenderer = ({ question }: QuestionRendererProps) => {
  switch (question.type) {
    case QuestionType.Text:
      return <TextQuestion question={question} />;
    case QuestionType.Date:
      return <DateQuestion question={question} />;
    case QuestionType.Checkbox:
      return <CheckboxQuestion question={question} />;
    case QuestionType.MultipleChoice:
      return <MultipleChoiceQuestion question={question} />;
    default:
      return null;
  }
};
