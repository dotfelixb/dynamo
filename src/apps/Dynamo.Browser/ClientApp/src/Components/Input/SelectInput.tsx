import React, { useState } from "react";

interface ISelectInputOptionProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SelectOption: React.FC<ISelectInputOptionProps> = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="text-xs font-semibold text-gray-600 px-3 py-2 cursor-pointer rounded hover:bg-gray-100"
    >
      {text}
    </div>
  );
};
interface ISelectInputProps {
  name: string;
  label?: string;
  value: string;
  placeholder?: string;
  error?: boolean;
}

interface ISelectInputSubProps {
  Option: React.FC<ISelectInputOptionProps>;
}

const SelectInput: React.FC<ISelectInputProps> & ISelectInputSubProps = ({
  name,
  label,
  value,
  placeholder = "",
  error = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative grid space-y-2" onClick={() => setIsOpen(!isOpen)}>
      <label htmlFor={name} className="text-gray-600 text-xs">
        {label ?? placeholder}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={() => {}}
        className={`input-default ${error ? "input-error" : "input-primary"}`}
      />
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-gray-50 opacity-5 w-full h-full cursor-default"
          tabIndex={-1}
        ></button>
      )}
      <div
        className={`${
          isOpen ? "" : "hidden"
        } w-full absolute inset-x-0 top-14 bg-white p-1 rounded shadow`}
      >
        {children}
      </div>
    </div>
  );
};

SelectInput.Option = SelectOption;

export default SelectInput;
