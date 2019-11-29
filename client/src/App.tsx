import React from "react";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
