import React from "react";
import { PageView } from "../../Components";
import {
  List,
  Text,
  Link,
  ITheme,
  getTheme,
  getFocusStyle,
  DefaultPalette,
  mergeStyleSets,
  FontIcon,
} from "@fluentui/react";
import {} from "react-router-dom";

const theme: ITheme = getTheme();

interface DashboardProps {}

interface ISideViewMenuList {
  title: string;
  path: string;
  iconName: string;
}

const sideViewMenuList: ISideViewMenuList[] = [
  { title: "Accounting", path: "/app/accounting", iconName: "Money" },
  { title: "Buying", path: "/app/buying", iconName: "Headset" },
  { title: "CRM", path: "/app/crm", iconName: "PieSingle" },
  { title: "HR", path: "/app/hr", iconName: "FabricUserFolder" },
  { title: "Payroll", path: "/app/payroll", iconName: "PaymentCard" },
];

const renderSideViewItems = (
  item: ISideViewMenuList | undefined,
  index: number | undefined
) => {
  const classNames = mergeStyleSets({
    linkView: {
      display: "flex",
      padding: 10,
      boxSizing: "border-box",
      alignItems: "center",
      textTransform: "uppercase",
      selectors: {
        "&:hover": {
          background: DefaultPalette.neutralLighter,
        },
      },
    },
    iconClass: {
      fontSize: 14,
      height: 14,
      width: 14,
      margin: "0 12px 0 0",
      color: DefaultPalette.neutralDark,
    },
    linkStyle: {
      textDecoration: "none",
      selectors: {
        "&:hover": {
          textDecoration: "none",
        },
        "&:active:hover": {
          textDecoration: "none",
        },
      },
    },
  });

  return (
    <Link href={item?.path ?? ""} className={classNames.linkStyle}>
      <div className={classNames.linkView} data-is-focusable={true}>
        <FontIcon iconName={item?.iconName} className={classNames.iconClass} />
        <Text>{item?.title}</Text>
      </div>
    </Link>
  );
};

const Dashboard: React.FC<DashboardProps> = () => {
  const dashboardLeadingItems = (
    <div>
      <span>Dashboard</span>
    </div>
  );
  const dashboardMenuItems = <div>Button</div>;

  const dashboardSideView = (
    <List items={sideViewMenuList} onRenderCell={renderSideViewItems} />
  );

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
