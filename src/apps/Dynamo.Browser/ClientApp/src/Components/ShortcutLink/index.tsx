import React from "react";
import { Link } from "react-router-dom";

interface ShortcutLinkProps {
  to: string;
  title: string;
  data?: string;
}

const ShortcutLink: React.FC<ShortcutLinkProps> = ({ to, title, data }) => (
  <Link to={to}>
    <div className="flex bg-white px-3 py-2 rounded border shadow-sm items-center h-11 hover:bg-gray-100 hover:border-gray-200">
      <div className="flex w-1/2">{title}</div>
      <div className="flex w-1/2 justify-end">
        {data && (
          <span className="text-xs px-2 py-1 bg-gray-200 rounded">{data}</span>
        )}
      </div>
    </div>
  </Link>
);

export default ShortcutLink;
