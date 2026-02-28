interface FormHeaderProps {
  title: string;
  description: string | null | undefined;
}

export const FormHeader = ({ title, description }: FormHeaderProps) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{description || "None"}</p>
    </>
  );
};
