import { combineReducers } from "redux";
import todos from "./todos";
import users from "./users";

const reducers = combineReducers({
  todos,
  users,
  testText: () => "testText",
});

export default reducers;
