import React from "react";
import { DefaultPalette, IStackStyles, Stack } from "@fluentui/react";
export interface ContentViewProps {}

const contentViewStackStyles: IStackStyles = {
  root: {
    padding: "12px",
    borderRight: "1px solid rgba(0, 0, 0, .1)",
    borderBottom: "1px solid rgba(0, 0, 0, .1)",
    borderLeft: "1px solid rgba(0, 0, 0, .1)",
  },
};

const ContentView: React.FC<ContentViewProps> = ({ children }) => {
  return (
    <Stack grow={10} styles={contentViewStackStyles}>
      {children}
    </Stack>
  );
};

export default ContentView;
