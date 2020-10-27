import "core-js/stable";
import "regenerator-runtime/runtime";

import express from "express";
import proxy from "express-http-proxy";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";

import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

// if a request with path '/api' gets to the server, we gonna use this middleware, which gonna proxy the request to the url passed, that is our data API server
// we are passing an config obj, this config obj, that we are using in particular here, is just to make it work with the data API the instructor made for us (because he is using the Google OAuth, to make it sure that we dont run into any security errors with the google OAuth flow). But the proxyReqOptDecorator option is to overide most request options before issuing the proxyRequest.
// (https://www.npmjs.com/package/express-http-proxy#proxyreqoptdecorator--supports-promise-form)
//  See that we are changing the 'x-forwarded-host' header
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host
app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    },
  })
);

// serve the public directory statically
app.use(express.static("public"));

app.get("*", (req, res) => {
  // we will pass the request obj to our fn, so we can take the cookie object, and use it to create our axios instance, afterwards, we gonna pass our axios instance to our redux-thunk middleware, so we can use this axios instance to make the requests inside our action creators
  const store = createStore(req);

  // matchRoutes takes 2 args: the first is the routes config array, and the other the path that we want to access
  // matchRoutes will return an array of components that are about to be rendered, based on the informed path
  // see that we are destructuring the route property inside de map
  // this map statement gonna return an array of promises, each promises representing our network request to fetch the data, because the route.loadData() functions are async functions (async functions always return promises)
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    // if we have a loadData fn, we gonna call it, otherwise, we will not
    // see that we are passing the (server-side) store to the loadData functions
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    // defining the context obj which we gonna pass to our StaticRouter
    const context = {};

    const content = renderer(req, store, context);

    console.log("context: ", context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
