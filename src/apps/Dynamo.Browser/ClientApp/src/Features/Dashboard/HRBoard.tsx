import React from "react";
import { ShortcutLink } from "../../Components";

interface HRBoardProps {}

const HRBoard: React.FC<HRBoardProps> = () => {
  return (
    <div className="">
      <div className="text-lg uppercase text-gray-500 font-semibold p-3">
        Your links
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2n xl:grid-cols-3 gap-4 p-3">
        <ShortcutLink to="/app/employee" title="Employee" data="23 active" />
        <ShortcutLink to="/app/attendance" title="Attendance" />
        <ShortcutLink
          to="/app/leaveapps"
          title="Leave Application"
          data="4 active"
        />
        <ShortcutLink to="/app/leavetypes" title="Leave Type" />
        <ShortcutLink to="/app/jobs" title="Job Applicant" />
      </div>
    </div>
  );
};

export default HRBoard;
