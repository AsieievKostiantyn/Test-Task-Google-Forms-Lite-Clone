import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { Question } from "../../api/generatedApi";

interface IFormBuilderState {
  title: string;
  description: string;
  questions: Question[];
}

const initialState: IFormBuilderState = {
  title: "",
  description: "",
  questions: [],
};

const formBuilderSlice = createSlice({
  name: "form-builder",
  initialState,
  reducers: {
    setFormTitle: (state, actions: PayloadAction<string>) => {
      state.title = actions.payload;
    },
    setFormDescription: (state, actions: PayloadAction<string>) => {
      state.description = actions.payload;
    },

    addQuestion: (state, action: PayloadAction<Omit<Question, "id">>) => {
      state.questions.push({
        id: nanoid(),
        ...action.payload,
      });
    },
    updateQuestion: (state, action: PayloadAction<Question>) => {
      const index = state.questions.findIndex(
        (question) => question.id === action.payload.id,
      );

      state.questions[index] = action.payload;
    },
    deleteQuestion: (state, action: PayloadAction<string>) => {
      state.questions.filter((question) => question.id !== action.payload);
    },
  },
});

export const { setFormTitle, setFormDescription } = formBuilderSlice.actions;

export const formBuilderReducer = formBuilderSlice.reducer;
