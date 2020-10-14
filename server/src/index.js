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
  // matchRoutes will return an array of components that are about to be rendered, based on the informed path
  // see that we are destructuring the route property inside de map
  // this map statement gonna return an array of promises, each promises representing our network request to fetch the data, because the route.loadData() functions are async functions (async functions always return promises)
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    // if we have a loadData fn, we gonna call it, otherwise, we arent
    // see that we are passing the (server-side) store to the loadData functions
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
