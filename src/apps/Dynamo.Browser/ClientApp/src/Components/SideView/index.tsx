import React from "react";
import { IStackTokens, Stack } from "@fluentui/react";

const stackTokens: IStackTokens = { childrenGap: 8 };

export interface SideViewProps {}

const SideView: React.SFC<SideViewProps> = ({ children }) => {
  return (
    <Stack grow={2} tokens={stackTokens}>
      {children}
    </Stack>
  );
};

export default SideView;
