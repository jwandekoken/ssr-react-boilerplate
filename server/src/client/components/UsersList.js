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

export const loadData = () => {
  console.log("im trying to load some data");
};

export default connect(mapStateToProps, {
  fetchUsers,
})(UsersList);
