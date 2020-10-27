import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ auth }) => {
  console.log("authentication status: ", auth);

  // about the links below: from the browser perspective, we are making a request to "localhost/api/logout" or "localhost/api/auth/google", which gonna be proxied to out data API
  // and note that we are using an anchor tag, because Link tags we use only to navigate inside our application, using react-router-dom. When we want to make a real request, we have to use anchor tags
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <nav style={{ marginBottom: "20px" }}>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          React SSR
        </Link>
        <ul>
          <li className="right">{authButton}</li>

          <li className="right">
            <Link to="/admins">Admins</Link>
          </li>

          <li className="right">
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Header);
