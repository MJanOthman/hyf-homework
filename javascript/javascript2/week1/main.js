const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function sortingWords(arrayOfWords) {
  const sortedArr = arrayOfWords.sort((a, b) => a.length - b.length);
  return sortedArr;
}
console.log(sortingWords(["Fredresia", "Århus", "Horsens", "København"]));

let æ = 0;
let ø = 0;
let å = 0;
let includedStrings = [];

function findingDanishString(danskSetning) {
  let result = {};
  includedStrings = danskSetning.toLowerCase().split("");
  for (let i = 0; i < includedStrings.length; i++) {
    if (includedStrings[i] === "æ") {
      æ++;
    } else if (includedStrings[i] === "ø") {
      ø++;
    } else if (includedStrings[i] === "å") {
      å++;
    }
  }
  result.total = å + ø + æ;
  result.å = å;
  result.ø = ø;
  result.æ = æ;
  return result;
}
console.log(findingDanishString("dsfæ gdrgø drgå sdgø sseæ rtgå "));

let myButton = document.querySelector(".generate-button");
let userName = document.querySelector("#username");
let outputArea = document.querySelector(".output");
console.log(myButton, userName, outputArea);
const animalsArr = [
  "Angry Bird",
  "Lovely Tiger",
  "Lion King",
  "Skinny snake",
  "Amazing Dolphen",
  "Laughing smurf",
  "Kind elephant",
  "Covid Bat",
  "Soft kitty",
  "Clever fox",
];

myButton.onclick = function () {
  let myFinalName = userName.value;
  if (myFinalName == "") {
    outputArea.innerHTML = "Please Enter you name";
  } else {
    var randomAnimalName =
      animalsArr[Math.floor(Math.random() * animalsArr.length)];

    outputArea.innerHTML = `${myFinalName}-${randomAnimalName}`;
    let newNameButton = document.createElement("button");
    newNameButton.innerHTML = "Click & get new name";
    outputArea.appendChild(newNameButton);

    newNameButton.onclick = function () {
      let myFinalName = userName.value;
      if (myFinalName == "") {
        outputArea.innerHTML = "Please Enter you name";
      } else {
        var randomAnimalName =
          animalsArr[Math.floor(Math.random() * animalsArr.length)];

        outputArea.innerHTML = `${myFinalName}-${randomAnimalName}`;
        userName.value = "";
      }
    };
  }
};
