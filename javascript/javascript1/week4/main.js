let pureComand = [];
let enterName = [];
let person = [];
let toDoElement = [];
let toDoList = [];

function getReply(command) {
  pureComand = command.toString().toLowerCase().split(" ");

  //input the name and greeting
  if (
    pureComand.includes("hello") &&
    pureComand.includes("my") &&
    pureComand.includes("name") &&
    pureComand.includes("is")
  ) {
    if (person.name != undefined) {
      return `we already know you`;
    } else person.name = pureComand[4];
    return `Nice to meet you ${person.name}`;
  }

  //check if the name exists
  else if (
    pureComand.includes("what") &&
    pureComand.includes("is") &&
    pureComand.includes("my") &&
    pureComand.includes("name")
  ) {
    if (person.Name == undefined) {
      return "Sorry You didn't tell me your name yet";
    } else {
      return `Your name is ${person.Name}`;
    }
  }

  //I  made a general todo list
  //you can add whatever you want to it, not only fishing and singing in shower
  else if (
    pureComand.includes("add") &&
    pureComand.includes("to") &&
    pureComand.includes("my") &&
    pureComand.includes("todo")
  ) {
    for (let n = 1; n < pureComand.length - 3; n++) {
      toDoElement.push(pureComand[n]);
    }
    person.toDo = toDoElement.join(" ");
    toDoList.push(person.toDo);
    toDoElement = [];
    return `${person.toDo} added to your todo`;
  }

  //Check my todo list
  else if (
    pureComand.includes("what") &&
    pureComand.includes("is") &&
    pureComand.includes("on") &&
    pureComand.includes("my") &&
    pureComand.includes("todo?")
  ) {
    return `your todo list contains: ${toDoList.join(",")}`;
  }

  //remove missions from my todo list
  else if (
    pureComand.includes("remove") &&
    pureComand.includes("from") &&
    pureComand.includes("my") &&
    pureComand.includes("todo")
  ) {
    for (let n = 1; n < pureComand.length - 3; n++) {
      toDoElement.push(pureComand[n]);
    }
    let toDoRemove = toDoElement.join(" ");
    for (i = 0; i < toDoList.length; i++) {
      if ((toDoList[i] = toDoRemove)) {
        toDoList.splice(i, 1);
      }
    }
    toDoElement = [];
    return `${toDoRemove} is removed from your todo list`;
  }

  // get the date of the day
  else if (
    pureComand.includes("what") &&
    pureComand.includes("day") &&
    pureComand.includes("is") &&
    pureComand.includes("it")
  ) {
    let date = new Date();
    return `today date is ${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
  }

  //doing simple mathmatical operations
  else if (pureComand.includes("+")) {
    return (
      parseInt(pureComand[2]) + parseInt(pureComand[pureComand.length - 1])
    );
  } else if (pureComand.includes("*")) {
    return (
      parseInt(pureComand[2]) * parseInt(pureComand[pureComand.length - 1])
    );
  } else if (pureComand.includes("-")) {
    return (
      parseInt(pureComand[2]) - parseInt(pureComand[pureComand.length - 1])
    );
  } else if (pureComand.includes("/")) {
    return (
      parseInt(pureComand[2]) / parseInt(pureComand[pureComand.length - 1])
    );
  }

  //set timer by seconds or minutes
  else if (pureComand.includes("set") && pureComand.includes("timer")) {
    if (pureComand.includes("minutes") || pureComand.includes("minute")) {
      setTimeout(function () {
        console.log("Timer Done!");
      }, 240000);
      return `timer is set for ${pureComand[3]} ${pureComand[4]} `;
    } else if (
      pureComand.includes("seconds") ||
      pureComand.includes("second")
    ) {
      setTimeout(function () {
        console.log("Timer Done!");
      }, 4000);
      return `timer is set for ${pureComand[3]} ${pureComand[4]} `;
    }
  }

  //get permission to drink coffe or tea
  else if (
    pureComand.includes("can") &&
    pureComand.includes("i") &&
    pureComand.includes("drink") &&
    (pureComand.includes("coffe") || pureComand.includes("tea"))
  ) {
    let date = new Date();
    let hour = date.getHours();
    if (hour < 18) {
      return "Yes you can drink coffe or tea";
    } else {
      ("No it is too late,you should sleep early");
    }
  } else {
    return "Sorry I don't know what do you mean";
  }
}

console.log(getReply("Hello my name is Jan"));
console.log(getReply("hello my name is Mohammad"));
console.log(getReply("add fishing  to my todo"));
console.log(getReply("add fitness  to my todo"));
console.log(getReply("add coding  to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 5 + 3"));
console.log(getReply("what is 5 - 3"));
console.log(getReply("what is 5 / 3"));
console.log(getReply("what is 5 * 3"));
console.log(getReply("Set timer for 4 seconds"));
console.log(getReply("Set timer for 4 minutes"));
console.log(getReply("Can I drink a cup of tea ?"));
console.log(getReply("where do I live ?"));
