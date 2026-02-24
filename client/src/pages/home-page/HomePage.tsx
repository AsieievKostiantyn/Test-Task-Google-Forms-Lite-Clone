import { useFormsShortViewQuery } from "../../app/api/enhancedApi";
import { CreateNewFormButton, FormList } from "./components";

export const HomePage = () => {
  const { data, isLoading, isError } = useFormsShortViewQuery();

  let formsContent: React.ReactNode;

  if (isLoading) {
    formsContent = <p>Loading forms...</p>;
  } else if (isError) {
    formsContent = <p>Failed to load forms</p>;
  } else if (data) {
    formsContent = <FormList forms={data.forms} />;
  } else {
    formsContent = null;
  }

  return (
    <div>
      <h1>HomePage</h1>
      <CreateNewFormButton />

      <section>
        <h2>Form list</h2>
        {formsContent}
      </section>
    </div>
  );
};
