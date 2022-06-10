const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

// Respond with the json for all reservations *
router.get("/", async (request, response) => {
  response.send(reservations);
});

//Respond with the json for the reservation with the corresponding id
router.get("/:id", async (request, response) => {
  const reservationId = request.params.id;
  response.send(
    reservations.filter((reservation) => reservation.id == reservationId)
  );
});

module.exports = router;
