const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

// Respond with the json for all reservations *
router.get("/", async (request, response) => {
  response.send(reviews);
});

//Respond with the json for the reservation with the corresponding id
router.get("/:id", async (request, response) => {
  const reviewId = request.params.id;
  response.send(reviews.filter((rev) => rev.id == reviewId));
});

module.exports = router;
