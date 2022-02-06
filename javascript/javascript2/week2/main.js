const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubledOddNumbers = numbers.filter((x) => x % 2 !== 0).map((x) => x * 2);
console.log(doubledOddNumbers);

//movies with title name consists of 1 word (short title names)
const shortTitledMovies = movies.filter(
  (movie) => movie.title.split(" ").length < 2
);
console.log(shortTitledMovies);

//movies with title name consists of more than 8 words (long title names)
const longTitledMovies = movies.filter(
  (movie) => movie.title.split(" ").length > 8
);
console.log(longTitledMovies);

//movies between 1980-1989
let n = 0;
movies.forEach((movie) => {
  if (movie.year < 1990 && movie.year > 1979) {
    n = n + 1;
  }
});
console.log(n);

//adding tag key

const taggedMovies = movies.map((movie) => {
  const clonedMovie = { ...movie };

  if (clonedMovie.rating > 6.9) {
    clonedMovie.tag = "good";
  } else if (clonedMovie.rating > 3.9 && clonedMovie.rating < 7) {
    clonedMovie.tag = "average";
  } else {
    clonedMovie.tag = "bad";
  }
  return clonedMovie;
});
console.log(taggedMovies);
console.log(movies);

//Using chaining, first filter the movies array to only contain the movies rated higher than 6.
// Now map the movies array to only the rating of the movies.
const moviesMoreThan6 = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
console.log(moviesMoreThan6);

//Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin
const moviesLowercasedTitle = movies.map((movie) => {
  const clonedMovie = { ...movie };
  return clonedMovie.title.toLowerCase();
});
x = 0;
const moviesIncludeKeywords = moviesLowercasedTitle.forEach((title) => {
  if (
    title.includes("surfer") ||
    title.includes("alien") ||
    title.includes("benjamin")
  ) {
    x = x + 1;
  }
});
console.log(x);

//Create an array of movies where a word in the title is duplicated.
const splittedTitles = [];
moviesLowercasedTitle.forEach((movie) => {
  let a = movie.split(" ");
  splittedTitles.push(a);
});
console.log(splittedTitles);

const duplicatedMovies = [];
splittedTitles.forEach((title) => {
  let resultToReturn = false;

  resultToReturn = title.some((element, index) => {
    return title.indexOf(element) !== index;
  });
  if (resultToReturn) {
    duplicatedMovies.push(title.join(" "));
  }
});
console.log(duplicatedMovies);

//Avarage Rating
const ratingArr = movies.map((movie) => {
  return movie.rating;
});
let rateAvg = ratingArr.reduce((q, w) => {
  return q + w;
});
console.log("df", ratingArr);
console.log(rateAvg / ratingArr.length);
