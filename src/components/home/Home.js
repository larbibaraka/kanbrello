import React from "react";
import NavBar from "../navbar/navBar";
import Main from "../main/Main";
import { connect } from "react-redux";
import { logUser } from "../../actions/index";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
function Home(props) {

  const userLogged = props.userLogged;

  if (!userLogged) return <Redirect to='/'/>
  return (
    <>
      <NavBar />
      <Main />
    </>
  )
}

const mapStateToProps = state => ({
  userLogged: state.userReducer.userLogged
});
export default connect(
  mapStateToProps,
  { logUser }
)(Home);

