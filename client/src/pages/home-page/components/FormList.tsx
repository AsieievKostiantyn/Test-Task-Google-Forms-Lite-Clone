import type { FormsShortViewQuery } from "../../../app/api/generatedApi";
import { FormCard } from "./FormCard";

interface FormListProps {
  forms: FormsShortViewQuery["forms"];
}

export const FormList = ({ forms }: FormListProps) => {
  return (
    <ul>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </ul>
  );
};
