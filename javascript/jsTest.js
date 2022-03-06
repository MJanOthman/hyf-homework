//1. Programming Basics
const dishes = [
  "Spaghetti",
  "Lasagne",
  "Beans on toast",
  "Porridge",
  "Tomato soup",
  "Salmon",
];
for (let i = 0; i < dishes.length; i++) {
  console.log(dishes[i]);
}

//2. DOM manipulation
const body = document.querySelector("body");
const btn = document.createElement("button");
btn.innerText = "Click me";
body.appendChild(btn);
btn.addEventListener("click", () => {
  const h1 = document.createElement("h1");
  h1.innerText = "Javascript test";
  body.appendChild(h1);
  setTimeout(() => {
    body.style.backgroundColor = "red";
  }, 3000);
});

//I made the background color changes after 3 minutes,
// so you can realize the h1 first, then the background color

//3. Async API calls

(async function () {
  const responses = await fetch("https://reqres.in/api/users");
  if (responses.ok) {
    const datas = await responses.json();
    for (let i = 0; i < 3; i++) {
      const firstName = document.createElement("p");
      firstName.innerText = datas.data[i].first_name;
      body.appendChild(firstName);
    }
  }
})();

//4. Class

class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello() {
    console.log(`Hello my name is ${this.firstName}`);
  }
}

const jan = new Person("Jan");
jan.sayHello();
