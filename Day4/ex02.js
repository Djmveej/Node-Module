var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    response.write(`<h1>Hello world</h1>\n
    <p> Test </p>
    <ul>
        <li>Connect</li>
        <li>Start</li>
    </ul>
    <ol>
        <li>Load</li>
    </ol>`);
    response.end();
  })
  .listen(3001);

console.log("Server running at http://localhost:3001");
