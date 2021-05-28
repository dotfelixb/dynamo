import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Layout } from "./Components";
import { Dashboard } from "./Features";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
