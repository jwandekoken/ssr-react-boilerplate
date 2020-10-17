import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

import reducers from "../client/reducers";

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: "http://react-ssr-api.herokuapp.com",
    headers: {
      // sometimes the user will make the request to our Render Server and it aint gonna come with a cookie, so we have to default de cookie value to an empty string, so we dont get an error
      cookie: req.get("cookie") || "",
    },
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
  return store;
};
