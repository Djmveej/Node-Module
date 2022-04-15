var fs = require("fs");

var content = "this is the content of the file";

var content = fs.readFileSync(fileName);

console.log("Content : " + content);
