import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import userImg from "./users.png";
import { fetchUsers } from "../actions";

const UsersList = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const renderUsers = () => {
    return users.map((user) => <li key={user.id}>{user.name}</li>);
  };

  const head = () => {
    return (
      <Helmet>
        <title>{`${users.length} Users Loaded`}</title>
        <meta property="og:type" content="Users App" />
        <meta property="og:type" content="website" />
      </Helmet>
    );
  };

  return (
    <>
      {head()}
      <div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={userImg}
            alt="user"
            style={{ display: "block", width: "100px" }}
          />
        </div>
        Here's a big list of users:
        <ul>{renderUsers()}</ul>
      </div>
    </>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

const loadData = (store) => {
  // our fetchUsers() action creator uses the async keyword, so it will return a promise, that represent out network request (async functions always return promises)
  return store.dispatch(fetchUsers());
};

export default {
  component: connect(mapStateToProps, {
    fetchUsers,
  })(UsersList),
  loadData,
};
