import React from "react";

interface ISelectInputProps {
  name: string;
  placeholder?: string;
  error?: boolean;
}

const SelectInput: React.FC<ISelectInputProps> = ({
  name,
  placeholder,
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
        className={`input-default ${error ? "input-error" : "input-primary"}`}
      />
    </div>
  );
};

export default SelectInput;
