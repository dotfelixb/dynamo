import React from "react";
import { PageView } from "../../Components";
import { Text } from "@fluentui/react";

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const dashboardLeadingItems = (
    <div>
      <span>Dashboard</span>
    </div>
  );
  const dashboardMenuItems = <div>Button</div>;

  const dashboardSideView = <div>Side view</div>;

  return (
    <PageView
      leadingItems={dashboardLeadingItems}
      menuItems={dashboardMenuItems}
      sideViewItems={dashboardSideView}
      sideViewTitle="Modules"
    >
      <div>
        <span>Dashboard</span>
      </div>
    </PageView>
  );
};

export default Dashboard;
