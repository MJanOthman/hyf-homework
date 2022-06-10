import "./App.css";
import React from "react";
import { TodoList } from "./todoListComponent";
import { Timer } from "./timer";

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Timer />
      <TodoList />
    </div>
  );
}

export default App;
