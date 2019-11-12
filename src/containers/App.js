import React from "react";
import Login from "../components/login/login";
import Home from '../components/home/Home';
import Board from './Boards';
import "./App.css";
import {connect}  from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App(props) {
  // const userLogged = props.userLogged;
  return(
    <Router>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
    </Router>
  )

  // return (!userLogged) ? <Login/> : <Home/>
}

const mapStateToProps = state => ({
  userLogged : state.userReducer.userLogged
});
export default connect(
mapStateToProps,
null
)(App);
