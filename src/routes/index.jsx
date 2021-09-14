import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Employee from "../pages/Employee";
import AddEmployee from "../pages/AddEmployee";
import PageNotFound from "../pages/PageNotFound";

const Routes = () => (
  <Switch>
    <Route path={["/home", "/"]} component={Home} exact />
    <Route path="/employee" component={AddEmployee} exact />
    <Route path="/employee/:id" component={Employee} exact />
    <Route path="*" component={PageNotFound} />
  </Switch>
);

export default Routes;
