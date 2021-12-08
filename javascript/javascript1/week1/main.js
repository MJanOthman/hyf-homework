//Age-ify (A future age calculator)
let yearOfBirth = 1997;
let yearFuture = 2055;
let age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

//Goodboy-Oldboy (A dog age calculator)
let dogYearOfBirth = 2019;
let dogYearFuture = 2030;
let dogYear = 0.25;
/* the calculation of dog and human years are not clear for me,
 so I assumed that 1 dog year equals 4 human years*/
let shouldShowResultInDogYears = false;
if (shouldShowResultInDogYears === true) {
  let dogAge = (dogYearFuture - dogYearOfBirth) * dogYear;
  console.log(
    "Your dog will be " + dogAge + " dog years old in " + dogYearFuture
  );
} else {
  let dogAge = dogYearFuture - dogYearOfBirth;
  console.log(
    "Your dog will be " + dogAge + " human years old in " + dogYearFuture
  );
}

//Housey pricey (A house price estimator)
let friendName = ["Peter", "Julia"],
  width = [8, 5],
  deepth = [10, 11],
  hight = [10, 8],
  gardenSizeInM2 = [100, 70],
  cost = [2500000, 1000000],
  volumeInM3 = [0, 0],
  housePrice = [0, 0];
for (let i = 0; i < friendName.length; i++) {
  volumeInM3[i] = width[i] * deepth[i] * hight[i];
  housePrice[i] = volumeInM3[i] * 2.5 * 1000 + gardenSizeInM2[i] * 300;
  if (housePrice[i] < cost[i]) {
    console.log("Dear " + friendName[i] + " you are paying too much.");
  } else {
    console.log("Dear " + friendName[i] + " your house cost is good.");
  }
}

//Ez Namey (Startup name generator)
let firstWords = [
  "Good",
  "Awsome",
  "Amazing",
  "Deciplined",
  "Clever",
  "Hard working",
  "Easy",
  "Helpful",
  "Useful",
  "Skilled",
];
secondWords = [
  "Batman",
  "Superman",
  "Aquaman",
  "Hulk",
  "Spiderman",
  "Wolverine",
  "Harry",
  "Potter",
  "Arya",
  "Stark",
];
let randomNumber1 = Math.floor(Math.random() * 10),
  randomNumber2 = Math.floor(Math.random() * 10),
  startupName = firstWords[randomNumber1] + " " + secondWords[randomNumber2];
console.log(startupName + " contains " + startupName.length);
