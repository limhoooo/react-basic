import { combineReducers } from "redux";
import { todosReducer } from "./todo";
const reducers = combineReducers({
  todos: todosReducer,
});
export default reducers;
