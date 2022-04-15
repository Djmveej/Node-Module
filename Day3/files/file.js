//nodeJS file core module

var file = require("fs");

file.readFile("message.text", (error, data) => {
  if (error) {
    console.log("Error is happening");
    throw error;
  } else {
    console.log("Content: " + data);
  }
});
