interface OptionsEditorProps {
  options: string[];
  setOptions: (options: string[]) => void;
}

export const OptionsEditor = ({ options, setOptions }: OptionsEditorProps) => {
  const updateOption = (index: number, value: string) => {
    const optionsCopy = [...options];
    optionsCopy[index] = value;
    setOptions(optionsCopy);
  };

  const removeOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  return (
    <div>
      {options.map((option, index) => (
        <div>
          <input
            type="text"
            key={index}
            value={option}
            onChange={(e) => updateOption(index, e.target.value)}
          />

          <button onClick={() => removeOption(index)}>X</button>
        </div>
      ))}
      <button onClick={addOption}>Add option</button>
    </div>
  );
};
