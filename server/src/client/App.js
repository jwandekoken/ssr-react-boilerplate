import React, { useEffect } from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";

import { fetchCurrentUser } from "./actions";
import Header from "./components/Header";

// any child routes that got matched, gonna be passed inside the "route.routes" prop
const App = ({ route, fetchCurrentUser }) => {
  /*useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);*/

  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

const loadData = (store) => {
  return store.dispatch(fetchCurrentUser());
};

export default {
  component: connect(null, {
    fetchCurrentUser,
  })(App),
  loadData,
};
