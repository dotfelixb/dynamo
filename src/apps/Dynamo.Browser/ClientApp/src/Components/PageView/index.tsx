import React from "react";
import {
  Stack,
  Text,
  FontWeights,
  IStackTokens,
  DefaultPalette,
  Link,
  IStackStyles,
} from "@fluentui/react";
import SideView from "../SideView";
import ContentView from "../ContentView";

const defaultWidth = "1200px";

const boldStyle = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 8 };

const toolbarStackStyles: IStackStyles = {
  root: {
    lineHeight: "24px",
    paddingTop: "12px",
    paddingBottom: "12px",
    borderBottom: "1px solid rgba(0, 0, 0, .1)",
  },
};

const contentStackStyles: IStackStyles = {
  root: {},
};

const toolbarStyles: IStackStyles = {
  root: {
    width: defaultWidth,
    margin: "0 auto",
  },
};

const contentStyles: IStackStyles = {
  root: {
    width: defaultWidth,
    margin: "0 auto",
  },
};

export interface PageViewProps {
  leadingItems: JSX.Element;
  menuItems: JSX.Element;
  sideViewItems: JSX.Element;
  sideViewTitle: string;
}

const PageView: React.FC<PageViewProps> = ({
  leadingItems,
  menuItems,
  sideViewItems,
  sideViewTitle,
  children,
}) => {
  return (
    <div>
      <Stack styles={toolbarStackStyles}>
        {/* toolbar */}
        <Stack horizontal styles={toolbarStyles}>
          <Stack grow>{leadingItems}</Stack>
          <Stack grow horizontalAlign="end">
            {menuItems}
          </Stack>
        </Stack>
      </Stack>
      <Stack styles={contentStackStyles}>
        {/* content */}
        <Stack horizontal styles={contentStyles}>
          <SideView>
            <div>
              <span>{sideViewTitle}</span>
            </div>
            {sideViewItems}
          </SideView>
          <ContentView>{children}</ContentView>
        </Stack>
      </Stack>
    </div>
  );
};

export default PageView;
