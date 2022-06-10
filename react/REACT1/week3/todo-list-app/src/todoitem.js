import React from "react";
import { useState } from "react";
import BorderComponent from "./border";

export default function TodoItem(prop) {
  const doneFirstStatus = false;
  const [done, setDone] = useState(doneFirstStatus);
  const [update, setUpdate] = useState(false);
  let [descriptionEdit, setDescriptionEdit] = useState(prop.description);

  const editeInputHandler = (e) => {
    setDescriptionEdit(e.target.value);
    console.log(descriptionEdit);
  };

  const editTodo = () => {
    setUpdate(true);
  };

  const updateTodo = () => {
    prop.setTodosState((prevItem) => {
      return prevItem.map((item) => {
        if (item.id === prop.id) {
          // 👇️ change value of description property
          return { ...item, description: descriptionEdit };
        }
        return item;
      });
    });
    setUpdate(false);
  };

  //   const updateTodo = () => {
  //     prop.setTodosState((item) => {
  //       if (item.id === prop.id) {
  //         // 👇️ change value of description property
  //         return { ...item, description: descriptionEdit };
  //       }
  //       return item;
  //     });

  //     setUpdate(false);
  //   };

  const taskDone = () => {
    setDone(!done);
  };
  function getClassName(done) {
    return done ? "todoItemDone" : "todoItemNotDone";
  }
  return (
    <div>
      <BorderComponent color={"fusia"}>
        <li>
          <p className={getClassName(done)} id={prop.id}>
            {update ? (
              <input
                type="text"
                value={descriptionEdit}
                onChange={editeInputHandler}
              />
            ) : (
              <span>
                {prop.description} | {prop.deadline}
              </span>
            )}
            <input type="checkbox" onClick={taskDone} />{" "}
            <button onClick={prop.deleteItem}>Delete</button>
            {update ? (
              <button onClick={updateTodo}>Update</button>
            ) : (
              <button onClick={editTodo}>Edit</button>
            )}
          </p>
        </li>
      </BorderComponent>
    </div>
  );
}
