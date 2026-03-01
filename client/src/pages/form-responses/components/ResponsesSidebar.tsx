import { href, Link } from "react-router";
import { ROUTES } from "../../../router";

interface ResponsesSidebarProps {
  responseIds: string[];
  formId: string;
}

export const ResponsesSidebar = ({
  responseIds,
  formId,
}: ResponsesSidebarProps) => {
  return (
    <aside style={{ display: "flex", flexDirection: "column" }}>
      <h3>Submissions</h3>
      {responseIds.length === 0
        ? "No submissions yet"
        : responseIds.map((responseId, index) => (
            <Link
              key={responseId}
              to={href(ROUTES.FORM_RESPONSE_DETAILS, {
                formId,
                responseId,
              })}
            >
              Submit {index + 1}
            </Link>
          ))}
    </aside>
  );
};
