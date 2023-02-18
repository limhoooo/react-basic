import { combineReducers } from "redux";
import { todoReducers } from "./todo";
import users from "./users";

const reducers = combineReducers({
  todos: todoReducers,
  users,
  testText: () => "testText",
});

export default reducers;
