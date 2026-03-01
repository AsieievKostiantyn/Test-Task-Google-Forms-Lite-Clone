import { Outlet } from "react-router";
import { useFormWithResponsesQuery } from "../../app/api/enhancedApi";
import { useFormId } from "../../shared/hooks/useFormId";
import { ResponsesSidebar } from "./components/ResponsesSidebar";

export const FormResponsesPage = () => {
  const formId = useFormId();

  const { data, isLoading, isError } = useFormWithResponsesQuery(
    { formId },
    { skip: !formId },
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;
  if (!data?.form) return <div>Form not found</div>;

  const responses = data.responses;
  const form = data.form;

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <ResponsesSidebar
        responseIds={responses.map((response) => response.id)}
        formId={form.id}
      />

      <main>
        <Outlet />
      </main>
    </div>
  );
};
