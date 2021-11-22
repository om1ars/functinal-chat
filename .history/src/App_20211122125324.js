import { MoreVert } from "@material-ui/icons";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <MoreVert
      </div>
    </div>
  );
}

export default App;
