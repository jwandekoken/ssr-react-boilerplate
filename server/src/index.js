import "core-js/stable";
import "regenerator-runtime/runtime";

import express from "express";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";

import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

// serve the public directory statically
app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();

  // matchRoutes takes 2 args: the first is the routes config array, and the other the path that we want to access
  // matchRoutes will return an array of components that are about to the rendered, based on the informed path

  // we are destructuring the route property inside de map
  matchRoutes(Routes, req.path).map(({ route }) => {
    // if we have a loadData fn, we gonna call it, otherwise, we arent
    return route.loadData ? route.loadData() : null;
  });

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
