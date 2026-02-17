import { createBrowserRouter, Navigate } from "react-router";
import {
  FormBuilderPage,
  FormFillPage,
  FormResponsesPage,
  HomePage,
} from "../pages";
import { ROUTES } from "./routes";

const routes = [
  {
    path: ROUTES.HOME_PAGE,
    element: <HomePage />,
  },
  {
    path: ROUTES.FORM_BUILDER,
    element: <FormBuilderPage />,
  },
  {
    path: ROUTES.FORM_FILL,
    element: <FormFillPage />,
  },
  {
    path: ROUTES.FORM_RESPONSES,
    element: <FormResponsesPage />,
  },
  { path: "*", element: <Navigate to={ROUTES.HOME_PAGE} replace /> },
];

export const router = createBrowserRouter(routes);
