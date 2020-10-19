import { FETCH_CURRENT_USER } from "../actions";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      // if the user is authenticated, the api will return this data obj, which we gonna put on the action.payload, otherwise, action.payload.data gonna be undefined
      return action.payload.data || false;

    default:
      return state;
  }
}
