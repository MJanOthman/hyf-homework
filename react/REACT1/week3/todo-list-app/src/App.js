import "./App.css";
import React from "react";
import { TodoList } from "./todoListComponent";
import { Timer } from "./timer";
// import ViewsDatePicker from "./dateComponent";

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Timer />
      {/* <ViewsDatePicker /> */}
      <TodoList />
    </div>
  );
}

export default App;
