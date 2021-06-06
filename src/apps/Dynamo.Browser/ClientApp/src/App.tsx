import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Layout } from "./Components";
import {
  AttendancePage,
  Dashboard,
  EmployeePage,
  LeaveAppPage,
} from "./Features";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/app/employee" component={EmployeePage} />
          <Route path="/app/attendance" component={AttendancePage} />
          <Route path="/app/leaveapps" component={LeaveAppPage} />
          <Route path="/app/leavetypes" component={EmployeePage} />
          <Route path="/app/jobs" component={EmployeePage} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
