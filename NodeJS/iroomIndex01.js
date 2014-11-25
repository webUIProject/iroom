var server = require("./iroomServer01");
var router = require("./iroomRouter01");
var requestHandlers = require("./iroomRequestHandlers01");

var handle = {}
handle["/"] = requestHandlers.iroomHTML;
handle["/iroomPage01.1.html"] = requestHandlers.iroomHTML;
handle["/iroomPage01.css"] = requestHandlers.iroomCSS;
handle["/iroomLogo.png"] = requestHandlers.iroomLOGO;

//handle["/upload"] = requestHandlers.upload;
//handle["/show"] = requestHandlers.show;



server.start(router.route, handle);