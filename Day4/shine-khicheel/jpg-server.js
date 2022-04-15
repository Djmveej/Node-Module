var header = {
  "Content-Type": "image/jpeg",
};

var fs = require("fs");
var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, header);
    const data = fs.readFileSync("test.jpeg");
    response.end(data);
  })
  .listen(3002);

console.log("Server is started");
