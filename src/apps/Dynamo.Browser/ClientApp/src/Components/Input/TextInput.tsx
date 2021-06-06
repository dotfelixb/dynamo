import React from "react";

interface ITextInputProps {
  name: string;
  placeholder?: string;
  error?: boolean;
}

const TextInput: React.FC<ITextInputProps> = ({
  name,
  placeholder = "",
  error = false,
}) => {
  return (
    <div className="grid space-y-2">
      <label htmlFor={name} className="text-gray-600 text-xs">
        {placeholder}
      </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className={`input-default ${error ? "input-error" : "input-primary"}`}
      />
    </div>
  );
};

export default TextInput;
