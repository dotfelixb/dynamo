import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "./Components";
import { Dashboard } from "./Features";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
