const express = require("express");

const app = express();

// app.get
app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

// app.listen
app.listen(5000, () => {
  console.log("server is listening");
});

// app.post
// app.put
// app.delete
// app.all
// app.use
