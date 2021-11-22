import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.user.user)

  console.log(user);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <BrowserRouter>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
