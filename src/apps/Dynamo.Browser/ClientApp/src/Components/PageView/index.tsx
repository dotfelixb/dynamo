import React from "react";

interface PageViewProps {
  renderTitle?: JSX.Element;
  renderToolbar?: JSX.Element;
  renderSideView?: JSX.Element;
}

const PageView: React.FC<PageViewProps> = ({
  renderTitle,
  renderToolbar,
  renderSideView,
  children,
}) => {
  const viewClass = "flex flex-row xl:px-48 ";

  return (
    <div>
      <div
        className={`${viewClass} bg-white py-5 pt-20 border-b border-gray-200`}
      >
        <div className="container flex flex-row mx-auto items-center h-5">
          <div className="w-1/2 flex ">{renderTitle}</div>
          <div className="w-1/2 flex justify-end">{renderToolbar}</div>
        </div>
      </div>
      <div className={`${viewClass} bg-white`}>
        <div className="container flex flex-row mx-auto">
          <div className="hidden flex-col w-1/6 lg:flex xl:flex py-3 pr-3">
            {renderSideView}
          </div>
          <div className="w-5/6 border-r border-b border-l">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageView;
