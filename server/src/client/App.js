import React from "react";
import { renderRoutes } from "react-router-config";

// any child routes that got matched, gonna be passed inside the "route.routes" prop
const App = ({ route }) => {
  console.log("route", route);

  return (
    <div>
      <h1>Im a header</h1>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
};
