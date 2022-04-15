var header = {
  "Content-Type": "video/mp4",
};

var fs = require("fs");
var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, header);
    const data = fs.readFileSync("minii-oxin.mp4");
    response.end(data);
  })
  .listen(3002);

console.log("Server is started");
