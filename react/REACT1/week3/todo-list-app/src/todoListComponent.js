import React from "react";
import { useState, useEffect } from "react";
import TodoItem from "./todoitem";
import BorderComponent from "./border";

export function TodoList() {
  const [todosState, setTodosState] = useState([]);
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
    )
      .then((res) => res.json())
      .then((data) => setTodosState(data));
  }, []);
  const current = new Date();
  const todaysDate = `${current.getFullYear()}-0${current.getMonth() +
    1}-${current.getDate()}`;

  const [textInputState, setTextInput] = useState("");
  const [dateInputState, setDateInput] = useState(todaysDate);

  const addTodo = () => {
    console.log(todaysDate, dateInputState);
    if (
      textInputState === "" ||
      dateInputState === "" ||
      dateInputState < todaysDate
    ) {
      alert(
        "Can't add todo without correct description or deadline after todays date"
      );
    } else {
      if (todosState.length === 0) {
        const newTodo = {
          description: textInputState,
          deadline: dateInputState,
          id: todosState.length + 1,
        };
        setTextInput("");
        setDateInput("");
        setTodosState((prevTodos) => {
          return [...prevTodos, newTodo];
        });
      } else {
        const newTodo = {
          description: textInputState,
          deadline: dateInputState,
          id: todosState[todosState.length - 1].id + 1,
        };
        setTextInput("");
        setDateInput("");
        setTodosState((prevTodos) => {
          return [...prevTodos, newTodo];
        });
      }
    }
  };
  const textInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const DateHandler = (e) => {
    setDateInput(e.target.value);
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
      id={todo.id}
      status={todo.done}
      deadline={todo.deadline}
      deleteItem={() => deleteTodo(todo.id)}
      setTodosState={setTodosState}
    ></TodoItem>
  ));
  if (todosState.length === 0) {
    return (
      <div>
        <BorderComponent color={"black"}>
          Todo Task{" "}
          <input
            type="text"
            value={textInputState}
            onChange={textInputHandler}
          />
          <br></br>
          Deadline{" "}
          <input type="text" value={dateInputState} onChange={DateHandler} />
          <button onClick={addTodo}>Add todo</button>
          <p>no items to show</p>
        </BorderComponent>
      </div>
    );
  } else
    return (
      <div className="App">
        <BorderComponent color={"black"}>
          Todo Task{" "}
          <input
            type="text"
            value={textInputState}
            onChange={textInputHandler}
          />
          <br></br>
          Deadline{" "}
          <input type="date" value={dateInputState} onChange={DateHandler} />
          <button onClick={addTodo}>Add todo</button>
          {todoItems}
        </BorderComponent>
      </div>
    );
}
