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

const defaultWidth = "1200px";

const stackTokens: IStackTokens = { childrenGap: 8 };

const menuBarStackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.themeLighter,
    lineHeight: "24px",
    paddingTop: "8px",
    paddingBottom: "8px",
    borderBottom: "1px solid rgba(0, 0, 0, .1)",
  },
};

const menuBarStyles: IStackStyles = {
  root: { width: defaultWidth, margin: "0 auto" },
};

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Stack verticalFill tokens={stackTokens}>
      <Stack horizontal styles={menuBarStackStyles}>
        {/* menubar */}
        <Stack horizontal styles={menuBarStyles}>
          <Stack grow>
            <Text>Menu</Text>
          </Stack>
          <Stack grow horizontalAlign="end">
            <Text>Search</Text>
          </Stack>
        </Stack>
      </Stack>
      {/* render layout child */}
      {children}
    </Stack>
  );
};

export default Layout;
