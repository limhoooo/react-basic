import React from "react";
import ReactDOM from "react-dom/client";
// import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import store from "./redux/store";
//import ReduxContext from "./components/context/ReduxContext";

import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* react-redux 안쓸시 */}
    {/* <ReduxContext.Provider value={store}>
      <App />
    </ReduxContext.Provider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
