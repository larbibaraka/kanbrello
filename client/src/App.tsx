import React from 'react';
import Login from './Components/Login'; 
import Dashboard from './Components/Dashboard';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import './App.css';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/">
        <Login/>
      </Route>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
    </Switch>
  );
}

export default App;
