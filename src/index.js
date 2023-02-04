import React from "react";
import ReactDOM from "react-dom/client";
// import "antd/dist/antd.css";
import "./index.css";
import App from "./App";

import store from "./redux/store";
// import { addTodo, doneTodo } from "./redux/actions";

// store.dispatch(addTodo('하이하이'))
// store.dispatch(addTodo('하루안녕'))
// store.dispatch(doneTodo(0))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
