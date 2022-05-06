import { useState } from "react";

export default function TodoItem(prop) {
  const doneFirstStatus = false;
  const [done, setDone] = useState(doneFirstStatus);

  const taskDone = () => {
    setDone(!done);
  };
  function getClassName(done) {
    return done ? "todoItemDone" : "todoItemNotDone";
  }
  return (
    <div>
      <li>
        <p className={getClassName(done)}> {prop.description} </p>
        <span>
          <input type="checkbox" onClick={taskDone} />{" "}
          <button onClick={prop.deleteItem}>Delete</button>
        </span>
      </li>
    </div>
  );
}
