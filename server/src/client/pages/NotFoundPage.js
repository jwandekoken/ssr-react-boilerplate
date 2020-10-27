import React from "react";

// internally the StaticRouter rename the 'context' props to 'staticContext'
// this staticContext only gonna exist on the server rendering flow. In the client-side, this staticContext wont exist, because only the StaticRouter have it, and at the client-side we are using the BrowserRouter. So we are defaulting the value to an empty object
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  return <h3>Oops... route not found.</h3>;
};

export default {
  component: NotFoundPage,
};
