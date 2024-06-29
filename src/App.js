import logo from "./logo.svg";
import "./App.css";
import { Simulate } from "react-dom/test-utils";
import Sidebar from "./components/sidebar/Sidebar";
import Headerbar from "./components/header/Headerbar";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
