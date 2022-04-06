const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

//Respond with the json for all the meals + meals Parameters
router.get("/", async (request, response) => {
  let maxPrice = request.query.maxPrice;
  let limit = request.query.limit;
  let createdAfter = request.query.createdAfter;
  let title = request.query.title;
  if (maxPrice) {
    response.send(meals.filter((meal) => meal.price <= maxPrice));
  } else if (limit) {
    const limmitedMeals = [];
    for (let i = 0; i < limit; i++) {
      limmitedMeals.push(meals[i]);
    }
    response.send(limmitedMeals);
  } else if (createdAfter) {
    response.send(
      meals.filter((meal) => meal.createdAt.valueOf() > createdAfter.valueOf())
    );
  } else if (title) {
    response.send(
      meals.filter((meal) =>
        meal.title.toLowerCase().includes(title.toLowerCase())
      )
    );
  } else {
    try {
      response.send(meals);
      console.log(meals);
      console.log("in /api/meals");
    } catch (error) {
      throw error;
    }
  }
});

//Respond with the json for the meal with the corresponding id
router.get("/:id", async (request, response) => {
  const mealId = request.params.id;
  if (parseInt(mealId)) {
    const mealsIdList = [];
    meals.forEach((meal) => mealsIdList.push(meal.id));
    if (mealsIdList.includes(parseInt(mealId))) {
      response.json(meals.filter((meal) => meal.id == mealId));
    } else {
      response.send("There is no meal matches the id you entered");
    }
  } else {
    response.send("the id should be a number");
  }
});

module.exports = router;
