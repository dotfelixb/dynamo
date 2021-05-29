import React from "react";
import { ShortcutLink } from "../../Components";

interface CRMBoardProps {}

const CRMBoard: React.FC<CRMBoardProps> = () => {
  return (
    <div className="">
      <div className="text-lg uppercase text-gray-500 font-semibold p-3">
        Your links
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2n xl:grid-cols-3 gap-4 p-3">
        <ShortcutLink to="/app/customers" title="Customers" data="454 active" />
        <ShortcutLink
          to="/app/opportunities"
          title="Opportunity"
          data="4 active"
        />
        <ShortcutLink to="/app/leads" title="Leads" data="4 active" />
        <ShortcutLink to="/app/employees" title="Sales Invoices" />
        <ShortcutLink
          to="/app/employee"
          title="Job Applicant"
          data="4 active"
        />
      </div>
    </div>
  );
};

export default CRMBoard;
