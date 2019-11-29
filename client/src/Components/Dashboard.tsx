import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Board from "./Board";
import Profile from "./Profile";

const Dashboard: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <h1> Dashboard </h1>
        </Route>
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