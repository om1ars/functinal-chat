import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>
        <Sidebar />
        <Chat />
        </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
