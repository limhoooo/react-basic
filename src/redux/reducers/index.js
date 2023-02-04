import { ADD_TODO, DONE_TODO } from "../actions";

const init = [];
let index = -1;
export function todoApp(previousState = init, action) {
  switch (action.type) {
    case ADD_TODO:
      index += 1;
      return [...previousState, { todo: action.todo, done: false, index }];
    case DONE_TODO:
      return previousState.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    default:
      return previousState;
  }
}
