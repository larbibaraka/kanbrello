import React from "react";
import ReactDOM from "react-dom";
/** redux part */
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Board from './containers/Boards';

const middleware = [ReduxThunk, createLogger(rootReducer)];

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

ReactDOM.render(
  
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
