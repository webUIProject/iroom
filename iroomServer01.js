var http = require("http");
var url = require("url");
/*
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);
*/

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(1234);
  console.log("Server has started.");
}

exports.start = start;



