import { combineReducers } from "redux";
import { todoReducers } from "./todo";

const reducers = combineReducers({
  todos: todoReducers,
});

export default reducers;
