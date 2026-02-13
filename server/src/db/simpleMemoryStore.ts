export const forms = [
  {
    id: "form-1",
    title: "Frontend Developer Survey",
    description: "Tell us about your frontend experience",
    questions: [
      {
        id: "q-1",
        title: "What is your name?",
        type: "TEXT",
      },
      {
        id: "q-2",
        title: "Which framework do you use the most?",
        type: "CHECKBOX",
        options: ["React", "Vue", "Angular", "Svelte"],
      },
      {
        id: "q-3",
        title: "Which technologies have you worked with?",
        type: "MULTIPLE_CHOICE",
        options: ["TypeScript", "Redux", "GraphQL", "Node.js"],
      },
      {
        id: "q-4",
        title: "When did you start learning frontend?",
        type: "DATE",
      },
    ],
  },

  {
    id: "form-2",
    title: "Product Feedback",
    description: "Help us improve our product",
    questions: [
      {
        id: "q-5",
        title: "How would you rate the product?",
        type: "MULTIPLE_CHOICE",
        options: ["1", "2", "3", "4", "5"],
      },
      {
        id: "q-6",
        title: "What do you like the most?",
        type: "TEXT",
      },
      {
        id: "q-7",
        title: "What should we improve?",
        type: "TEXT",
      },
    ],
  },
];

export const responses = [
  {
    id: "resp-1",
    formId: "form-1",
    answers: [
      { questionId: "q-1", value: "John Doe" },
      { questionId: "q-2", value: "React" },
      { questionId: "q-3", value: "TypeScript, Redux" },
      { questionId: "q-4", value: "2022-01-01" },
    ],
  },

  {
    id: "resp-2",
    formId: "form-2",
    answers: [
      { questionId: "q-5", value: "5" },
      { questionId: "q-6", value: "Ease of use" },
      { questionId: "q-7", value: "More integrations" },
    ],
  },
];
