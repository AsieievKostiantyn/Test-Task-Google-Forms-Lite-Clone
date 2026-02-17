import { useFormsShortViewQuery } from "../../app/api/generatedApi";

export const HomePage = () => {
  const formsQuery = useFormsShortViewQuery();
  console.log(formsQuery.data?.forms);

  return <>HomePage</>;
};
