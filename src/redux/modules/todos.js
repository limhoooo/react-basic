import { createActions, handleActions } from "redux-actions";

// redux-actions
// 이름이랑 type 다르지않게 주의할것
export const { addTodo, changeDone } = createActions(
  "ADD_TODO",
  "CHANGE_DONE",
  { prefix: "todos" }
);
const init = [];
const reducer = handleActions(
  {
    ADD_TODO: (state, action) => {
      return [...state, { todo: action.payload, done: false }];
    },
    CHANGE_DONE: (state, action) => {
      return state.map((todo, index) => {
        if (index === action.payload) return { ...todo, done: !todo.done };
        return todo;
      });
    },
  },
  init,
  { prefix: "todos" }
);

export default reducer;

// actions
// const ADD_TODO = "/todos/ADD_TODO";
// const CHANGE_DONE = "/todos/CHANGE_DONE";

// export function addTodo(todo) {
//   return {
//     type: ADD_TODO,
//     todo,
//   };
// }
// export function changeTodoDone(index) {
//   return {
//     type: CHANGE_DONE,
//     index,
//   };
// }

// reducer
// export default function reducer(previousState = init, actions) {
//   switch (actions.type) {
//     case ADD_TODO:
//       return [...previousState, { todo: actions.todo, done: false }];
//     case CHANGE_DONE:
//       return previousState.map((todo, index) => {
//         if (index === actions.index) return { ...todo, done: !todo.done };
//         return todo;
//       });
//     default:
//       return previousState;
//   }
// }
