import React from "react";

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="box-border font-sans w-full text-sm">
      {/* menu bar */}
      <nav
        id="header"
        className="box-border flex flex-row xl:px-48 fixed inset-x-0 z-10 border-b border-gray-200  bg-indigo-50 py-3"
      >
        <div className="container flex flex-row items-center mx-auto">
          <div className="w-1/2 flex ">
            <span className="font-light cursor-pointer">Dynamo</span>
          </div>
          <div className="w-1/2 flex items-center justify-end">
            {/* searchbox */}
            <div className=" w-3/4 px-5 mx-5">
              <input
                type="search"
                placeholder="Search for anything"
                className="w-full text-xs text-gray-700 outline-none rounded px-3 py-1 border border-gray-300 hover:shadow focus:shadow focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300"
              />
            </div>

            {/* user */}
            <div></div>

            {/* notification */}
            <div className="bg-red-500 px-2 rounded ">
              <span className="text-white text-xs font-medium cursor-pointer">
                7
              </span>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
