var http = require("http");
var url = require("url");
/*
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);
*/

function say(word) {
    console.log(word);
}
function execute(someFunction, value) {
    someFunction(value);
}



/*
http.createServer(function execute(say, response) {
    response.writeHead(300, {"Content-Type" : "text/plain"});
    response.write("Wow this is Node JS!!!");
    response.end();
}).listen(1234);
*/



/*
function onRequest(request, response) {
    console.log("Request received...");
    response.writeHead(500, {"Content-Type" : "text/plain"});
    response.write("Hello World");
    response.end();
}
http.createServer(onRequest).listen(1234);
console.log("Server has started...");
*/



/*
function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for "+ pathname + " received...");
        response.writeHead(200, {"Content-Type" : "text/plain"});
        response.write("Hello Node js!");
        response.end();
    }    
    http.createServer(onRequest).listen(2345);
    console.log("Server has Started...");
}

exports.start = start;
*/



/*
function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        
        route(pathname);
        
        response.writeHead(200, {"Content-Type" : "text/plain"});
        response.write("Hello Node js, Nice to meet you!");
        response.end();
    }
    
    http.createServer(onRequest).listen(2345);
    console.log("Server has started.");
}

exports.start = start;
*/




/*
function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
*/





function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;



