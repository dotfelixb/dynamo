import React from "react";
import { Link } from "react-router-dom";
import { PageView } from "../../Components";
import {
  BriefcaseIcon,
  ChartPieIcon,
  CogIcon,
  CollectionIcon,
  SupportIcon,
} from "@heroicons/react/outline";

interface DashboardProps {}

interface SideMenuProps {
  path: string;
  title: string;
  menuIcon: JSX.Element;
}

const sideMenus: SideMenuProps[] = [
  {
    path: "/d/crm",
    title: "Crm",
    menuIcon: <ChartPieIcon className="h-6 w-6 text-gray-500" />,
  },
  {
    path: "/d/hr",
    title: "Hr",
    menuIcon: <BriefcaseIcon className="h-6 w-6 text-gray-500" />,
  },
  {
    path: "/d/payroll",
    title: "Payroll",
    menuIcon: <CollectionIcon className="h-6 w-6 text-gray-500" />,
  },
  {
    path: "/d/support",
    title: "Support",
    menuIcon: <SupportIcon className="h-6 w-6 text-gray-500" />,
  },
  {
    path: "/d/settings",
    title: "Settings",
    menuIcon: <CogIcon className="h-6 w-6 text-gray-500" />,
  },
];

const Dashboard: React.FC<DashboardProps> = () => {
  const renderSideView = (
    <div>
      <div className="pb-3">
        <span className="cursor-default uppercase text-xs font-semibold text-gray-500">
          Modules
        </span>
      </div>
      <div>
        {sideMenus.map((item) => (
          <Link key={item.path} to={item.path}>
            <div className="px-3 py-3 rounded text-gray-600 flex align-middle hover:bg-gray-100 hover:text-gray-800">
              {item.menuIcon}
              <span className="pl-3 pt-1 uppercase text-xs">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return <PageView renderSideView={renderSideView}></PageView>;
};

export default Dashboard;
