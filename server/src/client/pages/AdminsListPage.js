import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchAdmins } from "../actions";
import requireAuth from "../components/hocs/requireAuth";

const AdminsListPage = ({ fetchAdmins, admins }) => {
  useEffect(() => {
    fetchAdmins();
  }, [fetchAdmins]);

  return (
    <div>
      <h3>Protected list of admins</h3>
      <ul>
        {admins.map((admin) => (
          <li key={admin.id}>{admin.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ admins }) => ({
  admins,
});

const loadData = (store) => {
  return store.dispatch(fetchAdmins());
};

export default {
  component: connect(mapStateToProps, {
    fetchAdmins,
  })(requireAuth(AdminsListPage)),
  loadData,
};
