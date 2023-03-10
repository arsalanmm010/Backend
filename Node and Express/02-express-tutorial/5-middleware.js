const express = require("express");
const logger = require("./logger");
const app = express();

// req => middleware => res

app.use(logger);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/product", (req, res) => {
  res.send("Products");
});

app.get("/api/item", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
