import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";

import Routes from "../client/Routes";

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.path}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  // here we are creating the helmet instance, that will contain all tags we defined using the helmet lib.
  // See that when we use, for example, 'helmet.meta.toString()', this will load up all meta-tags defined by us using helmet
  const helmet = Helmet.renderStatic();

  return `
    <html>
      <head>

        ${helmet.title.toString()}
        ${helmet.meta.toString()}

        <link rel="stylesheet" type="text/css" href="./styles.css" />

        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    
        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                
      </head>
      <body>
        <div id="root">${content}</div>

        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>

        <script src="bundle.js"></script>

      </body>
    </html>
  `;
};
