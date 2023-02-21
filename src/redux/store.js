import { applyMiddleware, createStore } from "redux";
import reducers from "./modules/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, promise, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
