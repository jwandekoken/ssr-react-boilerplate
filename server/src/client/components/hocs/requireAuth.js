import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default (ChildComponent) => {
  const requireAuth = (props) => {
    // the auth piece of state can return 3 values, false, null or an object representing the logged-in state of the user. We will use the default options to represent the logged-in state of the user, since is hard to represent the object that represents the logged-in state of the user
    switch (props.auth) {
      case false:
        return <Redirect to="/" />;

      // case the auth state is null, is because we did not finished the request to check if the user is logged-in yet
      case null:
        return <div>Loading...</div>;

      default:
        return <ChildComponent {...props} />;
    }
  };

  const mapStateToProps = ({ auth }) => ({
    auth,
  });

  return connect(mapStateToProps)(requireAuth);
};
