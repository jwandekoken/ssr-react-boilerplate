// types
export const FETCH_USERS = "FETCH_USERS";
export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";

export const fetchUsers = () => async (dispatch, getState, axiosInstance) => {
  try {
    const res = await axiosInstance.get("/users");

    //console.log(res);

    dispatch({
      type: FETCH_USERS,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchCurrentUser = () => async (
  dispatch,
  getState,
  axiosInstance
) => {
  try {
    const res = await axiosInstance.get("/current_user");

    console.log(res);

    dispatch({
      type: FETCH_CURRENT_USER,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
