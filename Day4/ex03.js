var fs = require("fs");
var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    const data = fs.readFileSync("content.html");
    response.end(data);
  })
  .listen(3002);

console.log("Server is started");
