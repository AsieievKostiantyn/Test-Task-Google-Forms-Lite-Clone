import { createBrowserRouter, Navigate } from "react-router";
import {
  FormBuilderPage,
  FormFillPage,
  FormResponsesPage,
  HomePage,
} from "../pages";
import { ROUTES } from "./routes";
import { ResponseDetails } from "../pages/form-responses/components/ResponseDetails";

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
    children: [
      {
        path: ROUTES.FORM_RESPONSE_DETAILS,
        element: <ResponseDetails />,
      },
    ],
  },
  { path: "*", element: <Navigate to={ROUTES.HOME_PAGE} replace /> },
];

export const router = createBrowserRouter(routes);
