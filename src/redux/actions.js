export const ADD_TODO = "ADD_TODO";
export const DONE_TODO = "DONE_TODO ";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

export function doneTodo(index) {
  return {
    type: DONE_TODO,
    index,
  };
}
