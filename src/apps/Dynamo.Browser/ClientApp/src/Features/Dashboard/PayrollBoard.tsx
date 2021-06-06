import React from "react";
import { ShortcutLink } from "../../Components";

interface PayrollBoardProps {}

const PayrollBoard: React.FC<PayrollBoardProps> = () => {
  return (
    <div className="">
      <div className="text-lg uppercase text-gray-500 font-semibold p-3">
        Your links
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2n xl:grid-cols-3 gap-4 p-3">
        <ShortcutLink to="/app/employee" title="Salary Structure" />
        <ShortcutLink to="/app/attendance" title="Payroll Period" />
        <ShortcutLink to="/app/leave" title="Salary Slip" data="4 active" />
        <ShortcutLink to="/app/leave/types" title="Payroll Entry" />
      </div>
    </div>
  );
};

export default PayrollBoard;
