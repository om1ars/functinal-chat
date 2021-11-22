import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer, { initialState } from "./components/Reducer";
import { StateProvider } from "./components/StateProvider";
import { provider } from "./utils/firebase";

ReactDOM.render(
  <React.StrictMode>
    <provider
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
