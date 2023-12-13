import "./App.css";
import logo from "./images/Projects-logo.png";
import Task from "./components/task";



function App() {
  return (
    <div className="App">
      <div className="container-logo">
        <img src={logo} className="img-logo" />
      </div>
      <div className="title-container">
        <h1>Todo List +</h1>
      </div>
      <div className="container-todo-principal">
        <Task text="perro"></Task>
      </div>
    </div>
  );
}

export default App;
