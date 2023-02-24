const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Homepage");
  }
  if (req.url === "/about") {
    res.end("Here is our history");
  }
  res.end(`<h1>OOps!</h1>
  <p>We can't to seem to find the page</p>
  <a href="/">Back Home</a>`);
});

server.listen(5000);

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores, important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y
