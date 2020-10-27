// types
export const FETCH_USERS = "FETCH_USERS";
export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
export const FETCH_ADMINS = "FETCH_ADMINS";

export const fetchUsers = () => async (dispatch, getState, axiosInstance) => {
  try {
    const res = await axiosInstance.get("/users");

    //console.log(res);

    dispatch({
      type: FETCH_USERS,
      payload: res,
    });
  } catch (error) {
    console.log("fetchUsers error: ", error);
  }
};

export const fetchCurrentUser = () => async (
  dispatch,
  getState,
  axiosInstance
) => {
  try {
    const res = await axiosInstance.get("/current_user");

    //console.log(res);

    dispatch({
      type: FETCH_CURRENT_USER,
      payload: res,
    });
  } catch (error) {
    console.log("fetchCurrentUser error: ", error);
  }
};

export const fetchAdmins = () => async (dispatch, getState, axiosInstance) => {
  try {
    const res = await axiosInstance.get("/admins");

    //console.log("fetchAdmins res: ", res);

    dispatch({
      type: FETCH_ADMINS,
      payload: res,
    });
  } catch (error) {
    console.log("fetchAdmins error: ", error);
  }
};
