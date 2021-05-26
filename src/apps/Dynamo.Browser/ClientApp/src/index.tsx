import React from "react";
import ReactDOM from "react-dom";
import {
  mergeStyles,
  createTheme,
  ThemeProvider,
  initializeIcons,
} from "@fluentui/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

initializeIcons();

const dynamoTheme = createTheme({
  palette: {
    themePrimary: "#0078d4",
    themeLighterAlt: "#eff6fc",
    themeLighter: "#deecf9",
    themeLight: "#c7e0f4",
    themeTertiary: "#71afe5",
    themeSecondary: "#2b88d8",
    themeDarkAlt: "#106ebe",
    themeDark: "#005a9e",
    themeDarker: "#004578",
    neutralLighterAlt: "#faf9f8",
    neutralLighter: "#f3f2f1",
    neutralLight: "#edebe9",
    neutralQuaternaryAlt: "#e1dfdd",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c6c4",
    neutralTertiary: "#a19f9d",
    neutralSecondary: "#605e5c",
    neutralPrimaryAlt: "#3b3a39",
    neutralPrimary: "#323130",
    neutralDark: "#201f1e",
    black: "#000000",
    white: "#ffffff",
  },
  fonts: {
    small: {
      fontSize: "11px",
    },
    medium: {
      fontSize: "13px",
    },
    large: {
      fontSize: "20px",
      fontWeight: "semibold",
    },
    xLarge: {
      fontSize: "22px",
      fontWeight: "semibold",
    },
  },
});

// Inject some global styles
mergeStyles({
  ":global(body,html,#root)": {
    margin: 0,
    padding: 0,
    height: "100vh",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider applyTo="body" theme={dynamoTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
