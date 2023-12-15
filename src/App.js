import "./App.css";
import logo from "./images/Projects-logo.png";
import ListTask from "./components/ListTask";

function App() {
  const [task, setTask] = useState([]);
  const addTask= task =>{
    console.log("add task");
    console.log(task);
  }
  return (
    <div className="App">
      <div className="container-logo">
        <img src={logo} className="img-logo" />
      </div>
      <div className="title-container">
        <h1>Todo List +</h1>
      </div>
      <div className="container-todo-principal">
        <ListTask/>
      </div>
    </div>
  );
}

export default App;
