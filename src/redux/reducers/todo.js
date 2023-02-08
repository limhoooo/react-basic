import { ADD_TODO, CHANGE_DONE } from "../actions";

const init = [];
export function todoReducers(previousState = init, actions) {
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
