import "./App.css";
import logo from "./images/Projects-logo.png";
import ListTask from "./components/ListTask";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  
  return (
    <div className="App">
      <div className="container-logo">
        <img src={logo} className="img-logo" />
      </div>
      <div className="container-todo-principal">
      <div className="title-container">
        <h1>Todo List +</h1>
      </div>
        <ListTask/>
      </div>
    </div>
  );
}

export default App;
