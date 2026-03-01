import { FormHeader } from "../../form-fill/components/FormHeader";
import { mapQuestionWithAnswers } from "../helpers/mapQuestionsWithAnswers";
import { useCurrentResponse } from "../hooks/useCurrentResponse";

export const ResponseDetails = () => {
  const { form, response } = useCurrentResponse();

  const questionsWithAnswers = mapQuestionWithAnswers(
    form.questions,
    response.answers,
  );

  return (
    <>
      <FormHeader title={form.title} description={form.description} />
      <h3>Questions list</h3>
      {questionsWithAnswers.map((q) => (
        <div key={q.id}>
          <h4>{q.title}</h4>
          <ul>
            {q.value
              ? q.value
                  .split(", ")
                  .map((value) => <li key={value}> {value}</li>)
              : "None"}
          </ul>
        </div>
      ))}
    </>
  );
};
