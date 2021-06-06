import { PlusIcon } from "@heroicons/react/outline";
import {
  DocumentIcon,
  PrinterIcon,
  TemplateIcon,
} from "@heroicons/react/outline";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import { LinkButton, MenuButton, PageView } from "../../../Components";

export interface ListEmployeeProps {}

const ListEmployee: React.FC<ListEmployeeProps> = () => {
  const match = useRouteMatch();

  const renderTitle = (
    <div>
      <span className="pageTitle">Employee</span>
    </div>
  );

  const renderToolbar = (
    <div className="flex flex-row space-x-2">
      <div>
        <MenuButton text="Menu">
          <MenuButton.MenuButtonItem
            text="Print"
            leadingIcon={<PrinterIcon className="w-4 h-4" />}
          />
          <MenuButton.MenuButtonItem
            text="Report"
            leadingIcon={<DocumentIcon className="w-4 h-4" />}
          />
          <MenuButton.MenuButtonItem
            text="Dashboard"
            leadingIcon={<TemplateIcon className="w-4 h-4" />}
          />
        </MenuButton>
      </div>
      <div>
        <LinkButton
          to={`${match.url}/new`}
          leadingIcon={<PlusIcon className="h-4 w-4" />}
          title="New Employee"
          buttonType="primary"
        ></LinkButton>
      </div>
    </div>
  );

  const renderSideView = (
    <div className="text-xs text-gray-600 uppercase">Filter By</div>
  );

  return (
    <PageView
      pageTitle="Employee"
      renderTitle={renderTitle}
      renderToolbar={renderToolbar}
      renderSideView={renderSideView}
    >
      {/* page content tool bar */}
      <div className="bg-indigo-50 flex">
        <div className="w-1/2 flex space-x-6 px-3 py-2">
          <div>
            <input
              id="id"
              name="id"
              type="text"
              className="w-full text-xs text-gray-700 outline-none rounded px-3 py-1 border border-gray-300 focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300"
              placeholder="Id"
            />
          </div>
          <div>
            <input
              id="first_name"
              name="first_name"
              type="text"
              className="w-full text-xs text-gray-700 outline-none rounded px-3 py-1 border border-gray-300 focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-end  px-3 py-2">
          <div className="flex">
            <div className="w-10 text-center bg-gray-500 text-white text-xs rounded-l hover:bg-gray-300 cursor-pointer px-3 py-1 hover:text-black ">
              20
            </div>
            <div className="w-10 text-center bg-gray-200 text-gray-700 text-xs hover:bg-gray-300 cursor-pointer px-3 py-1 hover:text-black">
              50
            </div>
            <div className="w-10 text-center bg-gray-200 text-gray-700 text-xs rounded-r hover:bg-gray-300 cursor-pointer px-3 py-1 hover:text-black">
              100
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="h-56"></div>
    </PageView>
  );
};

export default ListEmployee;
