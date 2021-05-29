import React from "react";
import { ShortcutLink } from "../../Components";

interface SupportBoardProps {}

const SupportBoard: React.FC<SupportBoardProps> = () => {
  return (
    <div className="">
      <div className="text-lg uppercase text-gray-500 font-semibold p-3">
        Your links
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2n xl:grid-cols-3 gap-4 p-3">
        <ShortcutLink to="/app/employees" title="Issues" data="5 pending" />
        <ShortcutLink to="/app/attendance" title="SLA" />
      </div>
    </div>
  );
};

export default SupportBoard;
