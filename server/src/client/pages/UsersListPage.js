import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../actions";

const UsersList = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const renderUsers = () => {
    return users.map((user) => <li key={user.id}>{user.name}</li>);
  };

  return (
    <div>
      Here's a big list of users:
      <ul>{renderUsers()}</ul>
    </div>
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
