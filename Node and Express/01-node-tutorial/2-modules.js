// CommonJS, every file is module (by defaut)
// Modules - Encapsulated Code (only share minimum)
const names = require("./3-names");
const sayHi = require("./4-utils");
const data = require("./5-alternative");
require("./6-mindGrenade");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
console.log(data);
