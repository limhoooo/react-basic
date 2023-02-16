import { combineReducers } from "redux";
import { todoReducers } from "./todo";

const reducers = combineReducers({
  todos: todoReducers,
  testText: () => "testText",
});

export default reducers;
