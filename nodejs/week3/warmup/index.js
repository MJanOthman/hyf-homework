const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week3 homework"));
app.get("/calculator/:operation", (req, res) => {
  const operation = req.params.operation;
  if (operation === "add") {
    let queries = req.query;
    const firstParam = parseInt(req.query.firstParam);
    const secondParam = parseInt(req.query.secondParam);
    let result = 0;
    if (firstParam && secondParam) {
      for (let i = 0; i < queries.secondParam.length; i++) {
        result = result + parseInt(queries.secondParam[i]);
      }
      res.send(` the result is ${firstParam + result}`);
    }
  } else if (operation == "multiply") {
    let queries = req.query;
    const firstParam = parseInt(req.query.firstParam);
    const secondParam = parseInt(req.query.secondParam);
    let result = 1;
    if (firstParam && secondParam) {
      for (let i = 0; i < queries.secondParam.length; i++) {
        result = result * parseInt(queries.secondParam[i]);
      }
      res.send(` the result is ${firstParam * result}`);
    }
  } else if (operation == "subtract") {
    let queries = req.query;
    const firstParam = parseInt(req.query.firstParam);
    const secondParam = parseInt(req.query.secondParam);
    let result = 0;
    if (firstParam && secondParam) {
      for (let i = 0; i < queries.secondParam.length; i++) {
        result = result + parseInt(queries.secondParam[i]);
      }
      res.send(` the result is ${firstParam - result}`);
    }
  } else if (operation == "divide") {
    let queries = req.query;
    const firstParam = parseInt(req.query.firstParam);
    const secondParam = parseInt(req.query.secondParam);
    let result = 1;
    if (firstParam && secondParam) {
      for (let i = 0; i < queries.secondParam.length; i++) {
        result = result * parseInt(queries.secondParam[i]);
      }
      res.send(` the result is ${firstParam / result}`);
    }
  } else {
    res.send("OOOPS..The operation you tey to do is not vaild");
  }
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
