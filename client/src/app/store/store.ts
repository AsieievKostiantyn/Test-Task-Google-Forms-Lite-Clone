import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/baseApi";
import { useDispatch, useSelector } from "react-redux";
import { formBuilderReducer } from "./slices/formBuilderSlice";
import { formFillReducer } from "./slices/formFillSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    formBuilder: formBuilderReducer,
    formFill: formFillReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
