const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals.json");
const reservations = require("./data/reservations.json");
const reviews = require("./data/reviews.json");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

//meals

const mealWithRev = meals.map((m) => {
  const rev = reviews.filter((r) => r.id === m.id);
  if (rev) {
    m.reviews = rev;
  } else {
    m.reviews = " ";
  }
  return m;
});
app.get("/meals", async (request, response) => {
  response.json(mealWithRev);
});

//cheap meals
const cheapMeals = mealWithRev.filter((meal) => meal.price < 60);
app.get("/cheap-meals", async (request, response) => {
  response.json(cheapMeals);
});

//large meals
const largeMeals = mealWithRev.filter((meal) => meal.maxNumberOfGuests > 6);
app.get("/large-meals", async (request, response) => {
  response.json(largeMeals);
});

//resrvations
app.get("/reservations", async (request, response) => {
  response.json(reservations);
});

//random meal
let j = Math.floor(Math.random() * mealWithRev.length);
app.get("/meal", async (request, response) => {
  response.json(mealWithRev[j]);
});

//random reservation
let i = Math.floor(Math.random() * reservations.length);
app.get("/reservation", async (request, response) => {
  response.json(reservations[i]);
});

module.exports = app;
