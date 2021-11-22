import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUSer] = useState(null);
  return (
    <div className="app">
      {!user ? (
        <Login
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
      )}
    </div>
  );
}

export default App;
