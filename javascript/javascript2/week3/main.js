//1)Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
setTimeout(() => console.log("Called after 2.5 seconds "), 2500);

//2.Create a function that takes 2 parameters: delay and stringToLog
function timerString(delay, stringToLog) {
  return setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}
timerString(7, "Hello 7");
timerString(3, "Hello 3");
timerString(1, "Hello 1");

//3.Create a button in html. When clicking this button, use the function you created in the previous task to log out the text:
// Called after 5 seconds 5 seconds after the button is click
let myBtn = document.querySelector(".timed-text");
console.log(myBtn);
myBtn.addEventListener("click", (callback) => {
  timerString(5, "5seconds ended");
});

//4.Create two functions and assign them to two different variables.

earthLogger = function () {
  console.log("You asked to logout Earth");
};
saturnLogger = function () {
  console.log("You asked to logout Saturn");
};

function planedLogFunction(planet) {
  planet();
}
planedLogFunction(earthLogger);
planedLogFunction(saturnLogger);

//5.Create a button with the text called "Log location".
let locationBtn = document.createElement("button");
locationBtn.className = "location-btn";
locationBtn.innerHTML = "Log location";
body = document.querySelector("body");
body.appendChild(locationBtn);
function success(geolocationPosition) {
  console.log("Success");
  console.log(geolocationPosition);
}

function error(error) {
  console.log(error.message);
}
locationBtn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(success, error);
});

//7.Create a function called runAfterDelay. It has two parameters: delay and callback
function runAfterDelay(CallBack, delay) {
  return setTimeout(() => {
    console.log(CallBack);
  }, delay * 1000);
}
function calc(b, c) {
  let n = b + c;
  return n;
}
runAfterDelay(calc(12, 17), 4);

//8.Check if we have double clicked on the page.
// A double click is defined by two clicks within 0.5 seconds.
//If a double click has been detected, log out the text: "double click!"

body.addEventListener("dblclick", function () {
  console.log("Double clicked");
});

//9.Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function.
// If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

function funnyJoke() {
  console.log(
    "Why don’t scientists trust atoms ? Because they make up everything."
  );
}

function badJoke() {
  console.log(
    "What do you call a can opener that doesn't work? a Can't opener"
  );
}

jokeCreator(false, funnyJoke, badJoke);

//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const funcArr = [
  () => {
    let n = 5 + 6;
    return n;
  },
  () => {
    let n = 6 - 5;
    return n;
  },
  () => {
    let n = 6 * 5;
    return n;
  },
];
for (let i = 0; i < 3; i++) {
  console.log(funcArr[i]());
}

//Create a function as a const and try creating a function normally. Call both functions.
const plusAsConst = function (a, b) {
  console.log(a + b);
};

function plus(a, b) {
  console.log(a + b);
}
plus(3, 4);
plusAsConst(6, 7);

//Create an object that has a key whose value is a function. Try calling this functio
obj = {
  func: (a, b) => {
    console.log(a + b);
  },
};
obj.func(8000, 9000);
