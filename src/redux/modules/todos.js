// actions
const ADD_TODO = "/todos/ADD_TODO";
const CHANGE_DONE = "/todos/CHANGE_DONE";

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

// reducer
const init = [];
export default function reducer(previousState = init, actions) {
  switch (actions.type) {
    case ADD_TODO:
      return [...previousState, { todo: actions.todo, done: false }];
    case CHANGE_DONE:
      return previousState.map((todo, index) => {
        if (index === actions.index) return { ...todo, done: !todo.done };
        return todo;
      });
    default:
      return previousState;
  }
}
