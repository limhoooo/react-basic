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
