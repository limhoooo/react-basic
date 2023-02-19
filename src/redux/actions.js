import axios from "axios";

export const ADD_TODO = "ADD_TODO";
export const CHANGE_DONE = "CHANGE_DONE";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}
export function changeTodoDone(index) {
  return {
    type: CHANGE_DONE,
    index,
  };
}

export const GET_USERS_START = "GET_USERS_START";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";
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
const GET_USERS = "GET_USERS";
// redux-promise-middleware 에서 만들어주는 type
export const GET_USERS_PENDING = "GET_USERS_PENDING";
export const GET_USERS_FULFILLED = "GET_USERS_FULFILLED";
export const GET_USERS_REJECTED = "GET_USERS_REJECTED";
export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get("https://api.github.com/users");
      return res.data;
    },
  };
}
