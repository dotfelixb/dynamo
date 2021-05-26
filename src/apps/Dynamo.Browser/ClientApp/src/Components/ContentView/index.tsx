import React from "react";
import { Stack } from "@fluentui/react";
export interface ContentViewProps {}

const ContentView: React.FC<ContentViewProps> = ({ children }) => {
  return <Stack grow={10}>{children}</Stack>;
};

export default ContentView;
