import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUSer] = useState(null)
  return (
    <div className="app">
      {!user ? (
        <h1>Login</h1>
      ) : (

      )}
     
    </div>
  );
}

export default App;
