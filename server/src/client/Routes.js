//import React from "react";

import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";

export default [
  {
    // HomePage is a object with a 'component' key, so we are using the spread operator to put this component key with its value inside our route
    ...HomePage,
    path: "/",
    exact: true,
  },
  {
    // UsersListPage is a object with a 'component' and a 'loadData' key
    ...UsersListPage,
    path: "/users",
    exact: true,
  },
];
