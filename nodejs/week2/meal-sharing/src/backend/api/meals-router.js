const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

//Respond with the json for all the meals + meals Parameters
router.get("/", async (request, response) => {
  let maxPrice = request.query.maxPrice;
  let limit = request.query.limit;
  let createdAfter = request.query.createdAfter;
  let title = request.query.title;
  let filtered = [];

  //in the code below, you can enter more than onr query parameter
  //and you will get the result
  if (maxPrice || limit || createdAfter || title) {
    if (maxPrice) {
      if (filtered.length == 0) {
        filtered = meals.filter((meal) => meal.price <= maxPrice);
      } else {
        filtered = filtered.filter((meal) => meal.price <= maxPrice);
      }
    }
    if (createdAfter) {
      if (filtered.length == 0) {
        filtered = meals.filter(
          (meal) => meal.createdAt.valueOf() > createdAfter.valueOf()
        );
      } else {
        filtered = filtered.filter(
          (meal) => meal.createdAt.valueOf() > createdAfter.valueOf()
        );
      }
    }
    if (title) {
      if (filtered.length == 0) {
        filtered = meals.filter((meal) =>
          meal.title.toLowerCase().includes(title.toLowerCase())
        );
      } else {
        filtered = filtered.filter((meal) =>
          meal.title.toLowerCase().includes(title.toLowerCase())
        );
      }
    }
    if (limit) {
      if (filtered.length == 0) {
        for (let i = 0; i < limit; i++) {
          filtered.push(meals[i]);
        }
      } else {
        let n = filtered.length - limit;
        for (let i = 0; i < n; i++) {
          filtered.pop();
        }
      }
    }
    response.send(filtered);
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
      response.send(meals.filter((meal) => meal.id == mealId));
    } else {
      response.send("There is no meal matches the id you entered");
    }
  } else {
    response.send("the id should be a number");
  }
});

module.exports = router;
