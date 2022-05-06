import "./App.css";
import { TodoList } from "./todoListComponent";
import { Timer } from "./timer";

function App() {
  return (
    <div className="App">
      <Timer />
      <TodoList />
    </div>
  );
}

export default App;
