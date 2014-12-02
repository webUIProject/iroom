var server = require("./iroomServer01");
var router = require("./iroomRouter01");
var requestHandlers = require("./iroomRequestHandlers01");

var handle = {}
handle["/"] = requestHandlers.iroomHTML;
<<<<<<< HEAD
handle["/iroomPage01.html"] = requestHandlers.iroomHTML;
handle["/iroomPage01.css"] = requestHandlers.iroomCSS;
handle["/iroomLogo.png"] = requestHandlers.iroomLOGO;



//handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

handle["/img1"] = requestHandlers.img1;
=======
handle["/iroomPage01.1.html"] = requestHandlers.iroomHTML;
handle["/iroomPage01.css"] = requestHandlers.iroomCSS;
handle["/iroomLogo.png"] = requestHandlers.iroomLOGO;

//handle["/getImgData"] = requestHandlers.getImageData;
handle["/getIroomData"] = requestHandlers.getIroomData;
handle["/test.png"] = requestHandlers.imgPopUp;
handle["/test2.png"] = requestHandlers.imgPopUp2;

//handle["/upload"] = requestHandlers.upload;
//handle["/show"] = requestHandlers.show;

>>>>>>> 2f268dcfe7c25f61e5431de6cbc278933b14d8b5


server.start(router.route, handle);