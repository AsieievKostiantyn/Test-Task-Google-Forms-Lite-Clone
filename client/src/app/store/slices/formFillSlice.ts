import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type AnswerValue = string | string[];
export type Answers = Record<string, AnswerValue>;

interface IFormFillState {
  formId: string | null;
  answers: Answers;
}

const initialState: IFormFillState = {
  formId: null,
  answers: {},
};

const formFillSlice = createSlice({
  name: "form-fill",
  initialState,
  reducers: {
    initializeForm(state, action: PayloadAction<{ formId: string }>) {
      state.formId = action.payload.formId;
      state.answers = {};
    },

    setAnswer: (
      state,
      action: PayloadAction<{ questionId: string; value: AnswerValue }>,
    ) => {
      state.answers[action.payload.questionId] = action.payload.value;
    },

    resetForm: (state) => {
      state.formId = null;
      state.answers = {};
    },
  },
});

export const { initializeForm, setAnswer, resetForm } = formFillSlice.actions;

export const formFillReducer = formFillSlice.reducer;
