import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import { UserStateValue } from "./components/StateProvider";

function App() {
  return (
    <div className="app">
      {false ? (
        <Login />
      ) : (
        <div className="app__body">
          <BrowserRouter>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:id">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      {/* )} */}
    </div>
  );
}

export default App;
