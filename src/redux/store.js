import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, promise))
);
export default store;
