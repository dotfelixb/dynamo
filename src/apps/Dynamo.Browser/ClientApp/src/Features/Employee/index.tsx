import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ListEmployee from "./List";
import NewEmployee from "./New";

export interface EmployeePageProps {}

const EmployeePage: React.FC<EmployeePageProps> = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}/new`} component={NewEmployee} />
      <Route path={`${match.url}`} component={ListEmployee} />
    </Switch>
  );
};

export default EmployeePage;
