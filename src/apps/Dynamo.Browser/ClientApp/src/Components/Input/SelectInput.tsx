import React, { useRef, useState } from "react";

interface ISelectInputOptionProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SelectOption: React.FC<ISelectInputOptionProps> = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="text-xs font-semibold text-gray-500 p-3 cursor-pointer rounded hover:bg-gray-100"
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
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div
      className="relative grid space-y-2"
      onClick={() => {
        setIsOpen(!isOpen);
        ref?.current?.focus();
      }}
    >
      <label htmlFor={name} className="text-gray-600 text-xs">
        {label ?? placeholder}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        ref={ref}
        onChange={() => {}}
        readOnly
        className={`input-default ${error ? "input-error" : "input-primary"}`}
      />
      {isOpen && (
        <button
          onClick={() => {
            setIsOpen(false);
            ref?.current?.focus();
          }}
          className="fixed inset-0 bg-gray-50 opacity-5 z-40 w-full h-full cursor-default"
          tabIndex={-1}
        />
      )}
      <div
        className={`${
          isOpen ? "" : "hidden"
        } w-full absolute inset-x-0 top-14 max-h-80 z-40 overflow-y-scroll bg-white p-1 rounded shadow-lg`}
      >
        {children}
      </div>
    </div>
  );
};

SelectInput.Option = SelectOption;

export default SelectInput;
