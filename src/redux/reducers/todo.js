import { ADD_TODO, DONE_TODO } from "../actions";

const init = [];
export function todosReducer(previousState = init, action) {
  const index = -1;
  switch (action.type) {
    case ADD_TODO:
      return [
        ...previousState,
        { todo: action.todo, done: false, index: index + 1 },
      ];
    case DONE_TODO:
      return previousState.map((todo, index) => {
        if (index === action.index) return { ...todo, done: !todo.done };
        return todo;
      });

    default:
      return previousState;
  }
}
