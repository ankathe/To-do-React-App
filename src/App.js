import "./App.css";
import logo from "./images/Projects-logo.png";
import ListTask from "./components/ListTask";
import Logo from './components/logo';

function App() {  
  return (
    <div className="App">
    <Logo/>
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
