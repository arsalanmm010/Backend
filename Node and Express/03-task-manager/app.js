const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(5000, (req, res) => {
  console.log("listening on port");
});