import { forms, responses } from "../db/simpleMemoryStore.js";
import { randomUUID } from "node:crypto";

export const resolvers = {
  Query: {
    forms: () => forms,
    form: (_, { id }) => forms.find((f) => f.id === id),
    responses: (_, { formId }) => responses.filter((r) => r.formId === formId),
  },

  Mutation: {
    createForm: (_, { title, description, questions = [] }) => {
      const newForm = {
        id: randomUUID(),
        title,
        description,
        questions: questions.map((q) => ({
          ...q,
          id: randomUUID(),
        })),
      };

      forms.push(newForm);
      return newForm;
    },

    submitResponse: (_, { formId, answers }) => {
      const response = {
        id: randomUUID(),
        formId,
        answers,
      };

      responses.push(response);
      return response;
    },
  },
};
