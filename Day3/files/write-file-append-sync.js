var fs = require("fs");
var content = "we are appending this file synchronously using node.js";
fs.appendFileSync("messege.txt", content);
console.log("File appended successfully");
