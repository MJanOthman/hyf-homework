const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/add", (req, res) => {
  const firstNumber = parseInt(req.query.first);
  const secondNumber = parseInt(req.query.second);
  console.log(firstNumber, secondNumber);
  res.send(`The result is ${firstNumber + secondNumber}`);
});
app.get("/multiply/:first/:second", (req, res) => {
  const firstNumber = parseInt(req.params.first);
  const secondNumber = parseInt(req.params.second);
  console.log(firstNumber, secondNumber);
  res.send(`The result is ${firstNumber * secondNumber}`);
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
