import { ChevronDownIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

interface IMenuButtonItemProps {
  text: string;
  leadingIcon?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const MenuButtonItem: React.FC<IMenuButtonItemProps> = ({
  text,
  leadingIcon,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-row px-3 py-2 space-x-3 items-center text-gray-500 text-left font-semibold text-xs bg-white rounded hover:bg-gray-100"
    >
      <div>{leadingIcon}</div>
      <div> {text}</div>
    </div>
  );
};

interface IMenuButtonProps {
  text: string;
  buttonType?: "primary" | "default";
  disabled?: boolean;
}

interface IMenuButtonSubProps {
  MenuButtonItem: React.FC<IMenuButtonItemProps>;
}

const MenuButton: React.FC<IMenuButtonProps> & IMenuButtonSubProps = ({
  text,
  buttonType = "default",
  disabled = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  let className = "";

  switch (buttonType) {
    case "primary": {
      if (disabled) {
        className = "btn-primary-disabled";
      } else {
        className = "btn-primary";
      }
      break;
    }
    default: {
      if (disabled) {
        className = "btn-default-disabled";
      } else {
        className = "btn-default";
      }
      break;
    }
  }

  return (
    <button
      className={`relative z-10 ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-row items-center space-x-1">
        <div>{text}</div>
        <ChevronDownIcon className="w-4 h-4" />
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-gray-50 opacity-5 w-full h-full cursor-default"
          tabIndex={-1}
        ></div>
      )}
      <div
        className={`${
          isOpen ? "" : "hidden"
        } absolute left-0 bg-white mt-2 p-1 rounded shadow`}
      >
        {children}
      </div>
    </button>
  );
};

MenuButton.MenuButtonItem = MenuButtonItem;

export default MenuButton;
