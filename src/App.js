import "./App.css";
import logo from "./images/Projects-logo.png";
import ListTask from "./components/ListTask";

function App() {  
  return (
    <div className="App">
      <div className="container-logo">
        <img alt="logo" src={logo} className="img-logo"/>
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
