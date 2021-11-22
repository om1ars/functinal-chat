import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer, { initialState } from "./components/Reducer";
import { StateProvider } from "./components/StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
