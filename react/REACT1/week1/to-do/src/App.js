import "./App.css";

function App() {
  return (
    <div className="App">
      {" "}
      <ToDoList />
    </div>
  );
}

function ToDoItem(props) {
  return (
    <li>
      <h3>{props.description}</h3>
      <h4>{props.deadline}</h4>
    </li>
  );
}

function ToDoList() {
  return (
    <ul>
      {toDo.map((mission) => {
        return (
          <ToDoItem
            key={mission.id}
            description={mission.description}
            deadline={mission.deadline}
          />
        );
      })}
    </ul>
  );
}

const toDo = [
  {
    description: "Wake up",
    deadline: "28-04-2022 04:30",
  },
  {
    description: "Go to Copenhagen",
    deadline: "28-04-2022 05:15",
  },
  {
    description: "Go to HYF class",
    deadline: "01-05-2022 12:00",
  },
];

export default App;
