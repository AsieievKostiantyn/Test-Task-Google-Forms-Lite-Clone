import { Link } from "react-router";
import { ROUTES } from "../../../router";

export const CreateNewFormButton = () => {
  return (
    <div>
      <Link to={ROUTES.FORM_BUILDER}>Create new form</Link>
    </div>
  );
};
