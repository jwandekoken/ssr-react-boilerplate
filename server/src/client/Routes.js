//import React from "react";

import App from "./App";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";

export default [
  {
    // App is a obj with a 'component' key, so we are using the spread operator to put this component key with its value (which is our App component) here, as the root component
    ...App,
    // and in the root component, we have nested components, declared inside the routes array
    routes: [
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
      {
        // AdminsListPage is a object with a 'component' and a 'loadData' key
        ...AdminsListPage,
        path: "/admins",
        exact: true,
      },
      {
        // NotFoundPage is a object with a 'component' key
        // by not providing a path, react-router will always show this component, at this point (if no other component gets called before)
        ...NotFoundPage,
      },
    ],
  },
];
