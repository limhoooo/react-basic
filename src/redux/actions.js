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
