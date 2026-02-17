import { href, Link } from "react-router";
import type { FormsShortViewQuery } from "../../../app/api/generatedApi";
import { ROUTES } from "../../../router";

interface FormCardProps {
  form: FormsShortViewQuery["forms"][number];
}

export const FormCard = ({ form }: FormCardProps) => {
  return (
    <li>
      <h2>{form.title}</h2>
      <p>{form.description || "None"}</p>
      <div>
        <Link to={href(ROUTES.FORM_FILL, { id: form.id })}>View Form</Link>
        <Link to={href(ROUTES.FORM_RESPONSES, { id: form.id })}>
          View Responses
        </Link>
      </div>
    </li>
  );
};
