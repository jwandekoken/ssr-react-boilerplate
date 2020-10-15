import axios from "axios";

// types
export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => async (dispatch) => {
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
    const res = await axios.get(
      "https://react-ssr-api.herokuapp.com/users/xss"
    );

    //console.log(res);

    dispatch({
      type: FETCH_USERS,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
