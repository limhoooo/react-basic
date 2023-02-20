import axios from "axios";

// action
const GET_USERS_START = "/users/GET_USERS_START";
const GET_USERS_SUCCESS = "/users/GET_USERS_SUCCESS";
const GET_USERS_FAIL = "/users/GET_USERS_FAIL";

const GET_USERS = "/users/GET_USERS";
// redux-promise-middleware 에서 만들어주는 type
export const GET_USERS_PENDING = "/users/GET_USERS_PENDING";
export const GET_USERS_FULFILLED = "/users/GET_USERS_FULFILLED";
export const GET_USERS_REJECTED = "/users/GET_USERS_REJECTED";

export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}
export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}
export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}
// reducer
const init = {
  loading: false,
  data: [],
  error: null,
};
export default function reducer(previousState = init, action) {
  switch (action.type) {
    case GET_USERS_START || GET_USERS_PENDING:
      return { ...previousState, loading: true, error: null };
    case GET_USERS_REJECTED:
      return { ...previousState, loading: false, error: action.payload };
    case GET_USERS_FULFILLED:
      return { ...previousState, loading: false, data: action.payload };
    case GET_USERS_SUCCESS:
      return { ...previousState, loading: false, data: action.data };
    case GET_USERS_FAIL:
      return { ...previousState, loading: false, error: action.error };

    default:
      return previousState;
  }
}

/**
 * redux-thunk
 */
export function getUsersThunk() {
  return async (dispatch) => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error));
      console.error(error);
    }
  };
}
/**
 * redux-promise-middleware
 */

export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get("https://api.github.com/users");
      return res.data;
    },
  };
}
