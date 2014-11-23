var server = require("./iroomServer01");
var router = require("./iroomRouter01");
var requestHandlers = require("./iroomRequestHandlers01");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);