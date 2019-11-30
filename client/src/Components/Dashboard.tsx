import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Board from "./Board";
import Profile from "./Profile";
import  DashboardNavBar  from "./DashboardElements/DashboardNavBar";

const Dashboard: React.FC = () => {
  return (
    <Router>
      <DashboardNavBar />
      <Switch>
        <Route exact path="/dashboard/board/1">
          <Board />
        </Route>
        <Route path="/dashboard/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};
export default Dashboard;
