let countries = {
  name: "Denmark",
  properties: {
    size: "Small",
    flagColors: ["red", "white"],
    population: "5 Millions",
    continent: "Eorupe",
  },
  name: "Egypt",
  properties: {
    size: "Medium",
    flagColors: ["red", "white", "black", "yellow"],
    population: "102 Millions",
    continent: "Africa",
  },
  name: "India",
  properties: {
    size: "Big",
    flagColors: ["orange", "green", "white"],
    population: "1.2 Billions",
    continent: "Asia",
  },
  name: "Canada",
  properties: {
    size: "Big",
    flagColors: ["red", "white"],
    population: "38 Millions",
    continent: "North America",
  },
  name: "Argentina",
  properties: {
    size: "medium",
    flagColors: ["ligh blue", "white", "yellow"],
    population: "45 Millions",
    continent: "South America",
  },
};
let countriesJson = JSON.stringify(countries);
console.log(countriesJson);

//Find a cool api
// in the api below, we get random mathmatical expression, the result is an object with
//5 keys {"first","second","operation","expression","answer"}
const body = document.querySelector("body");
setInterval(async () => {
  const mathResponse = await fetch("https://x-math.herokuapp.com/api/random");
  if (mathResponse.ok) {
    const mathContent = await mathResponse.json();
    console.log(mathContent);

    const p = document.createElement("p");

    p.innerHTML = `The expression is ${mathContent.expression} =${mathContent.answer}`;
    body.appendChild(p);
  }
}, 1000);
