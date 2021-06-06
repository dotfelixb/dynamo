import { ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const loc = useLocation();
  // TODO : build a better breadcrumb system
  const breadcrumb = loc.pathname.split("/").slice(-1)[0] ?? "";

  return (
    <div className="box-border font-sans w-full text-sm">
      {/* menu bar */}
      <nav
        id="header"
        className="box-border flex xl:px-48 fixed inset-x-0 z-50 border-b border-gray-200  bg-indigo-50 py-3"
      >
        <div className="container flex items-center mx-auto">
          <div className="w-1/2 flex item-center">
            <div className="mr-3">
              <Link to="/">
                <span className="font-bold text-gray-600 text-xs uppercase cursor-pointer">
                  Home
                </span>
              </Link>
            </div>
            {loc.pathname.startsWith("/app") && (
              <div className="flex items-center">
                <ChevronRightIcon className="h-4 w-4 text-gray-700" />
                <div className="ml-3 text-xs font-semibold text-gray-400 uppercase">
                  {breadcrumb}
                </div>
              </div>
            )}
          </div>
          <div className="w-1/2 flex items-center justify-end">
            {/* searchbox */}
            <div className="w-3/4 px-5 mx-5">
              <input
                type="search"
                placeholder="Search for anything"
                className="w-full text-sm text-gray-700 outline-none rounded px-3 py-1 border border-gray-300 hover:shadow focus:shadow focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300"
              />
            </div>

            {/* user */}
            <div className="w-1/4 flex items-center cursor-pointer text-xs text-gray-700">
              <div className="rounded w-8 text-center p-1 border border-gray-300 mr-1 ">
                DU
              </div>
              <div className="">Demo User</div>
            </div>

            {/* notification */}
            <div className="bg-red-400 w-8 text-xs text-white text-center rounded p-1 border border-red-500 cursor-default hover:bg-red-500">
              8
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
