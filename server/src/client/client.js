import "core-js/stable";
import "regenerator-runtime/runtime";

// Startup point for the client side application
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import axios from "axios";

import reducers from "./reducers";
import Routes from "./Routes";

const axiosInstance = axios.create({
  baseURL: "/api",
});

// see that we are using the extra argument thunk functionality, that will pass this extra argument, in this case, our axiosInstance, to our action creators
// https://github.com/reduxjs/redux-thunk/blob/master/src/index.js
const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
