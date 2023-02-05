import React from "react";
import ReactDOM from "react-dom/client";
// import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import ReduxContext from "./components/context/ReduxContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxContext.Provider value={store}>
      <App />
    </ReduxContext.Provider>
  </React.StrictMode>
);
