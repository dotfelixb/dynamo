import React from "react";

interface IDefaultButtonProps {
  text: string;
  buttonType?: "primary" | "default";
  disabled?: boolean;
  check?: boolean;
}

const DefaultButton: React.FC<IDefaultButtonProps> = ({
  text,
  buttonType = "default",
  disabled = false,
  check = false,
}) => {
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
    <button className={className} disabled={disabled}>
      {text}
    </button>
  );
};

export default DefaultButton;
