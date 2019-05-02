//Create a function which utilizes a callback. Make sure to add console.log statements to understand when your callback function is called.
const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "/test"), {}, err => {
  if (err) throw err;
  console.log("folder created...");
});
