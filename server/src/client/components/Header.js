import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ auth }) => {
  console.log("auth", auth);

  return (
    <div>
      <Link to="/">React SSR</Link>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Header);
