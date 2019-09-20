import React from "react";
import NavBar from "../navbar/navBar";
import Main from "../main/Main";
import { connect } from "react-redux";
import { logUser } from "../../actions/index";
import Board from '../../containers/Boards'
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
      <Route path="/boardname" component={Board}/>
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

