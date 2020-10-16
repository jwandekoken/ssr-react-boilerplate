// types
export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => async (
  dispatch,
  getState,
  clientSideAxiosInstance
) => {
  /*axios
    .get("https://react-ssr-api.herokuapp.com/users")
    .then((res) => {
      console.log(res);
      dispatch({
        type: FETCH_USERS,
        payload: res,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  */

  try {
    const res = await clientSideAxiosInstance.get("/users");

    //console.log(res);

    dispatch({
      type: FETCH_USERS,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
