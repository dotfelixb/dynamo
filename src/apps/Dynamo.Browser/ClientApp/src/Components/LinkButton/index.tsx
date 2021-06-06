import React from "react";
import { Link } from "react-router-dom";

export interface LinkButtonProps {
  title: string;
  to: string;
  leadingIcon?: JSX.Element;
  buttonType?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  title,
  to,
  leadingIcon,
  buttonType = "default",
  onClick,
}) => {
  let btnColor = "";

  switch (buttonType) {
    case "primary": {
      btnColor = "bg-indigo-500 text-white hover:bg-indigo-600";
      break;
    }

    default: {
      btnColor =
        "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900";
      break;
    }
  }

  return (
    <Link to={to} onClick={onClick}>
      <div
        className={`${btnColor} text-base flex items-center cursor-pointer px-3 py-1 rounded`}
      >
        {leadingIcon && leadingIcon}
        <span className={`${leadingIcon ? "ml-1" : ""}`}>{title}</span>
      </div>
    </Link>
  );
};

export default LinkButton;
