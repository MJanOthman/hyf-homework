import { useState } from "react";
import TodoItem from "./todoItem";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

export function TodoList() {
  const [todosState, setTodosState] = useState(todos);

  const addTodo = () => {
    const newTodo = { description: "learn React", id: todosState.length + 1 };
    setTodosState((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const deleteTodo = (id) => {
    const newTodos = todosState.filter((todo) => {
      return todo.id !== id;
    });
    setTodosState(newTodos);
  };

  const todoItems = todosState.map((todo) => (
    <TodoItem
      description={todo.description}
      key={todo.id}
      status={todo.done}
      deleteItem={() => deleteTodo(todo.id)}
    ></TodoItem>
  ));
  if (todosState.length === 0) {
    return (
      <div>
        <button onClick={addTodo}>Add todo</button>
        <button onClick={deleteTodo}>delete todo</button>
        <p>no items to show</p>
      </div>
    );
  } else
    return (
      <div className="App">
        <button onClick={addTodo}>Add todo</button>
        <button onClick={deleteTodo}>delete todo</button>
        {todoItems}
      </div>
    );
}
