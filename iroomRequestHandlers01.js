var querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable");


function iroomHTML(response) {
    console.log("Request handler 'iroomHTML' was called.")
    fs.readFile('./iroomPage01.html', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    });
}
       

function iroomCSS(response){
    console.log("Request handler 'iroomCSS' was called.")
    fs.readFile('./iroomPage01.css', function (err, data) {
        if (err) {
            return console.log(err);
        }
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(data);
        response.end();
      });  
}


function iroomLOGO(response){
    console.log("Request handler 'iroomLOGO' was called.")
    fs.readFile('./iroomLogo.png', "binary", function (err, file) {
        if (err) {
            return console.log(err);
        }
        response.writeHead(200, {'Content-Type': 'image/png'});
        response.write(file, "binary");
        response.end();
      });  
}


function upload(response, request) {
  console.log("Request handler 'upload' was called.");

  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");
    fs.renameSync(files.upload.path, "/tmp/test.png");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image:<br/>");
    response.write("<img src='/show' />");
    response.end();
  });
}


//function JSONtoString(object) {
//    var results = [];
//    for (var property in object) {
//        var value = object[property];
//        if (value)
//            results.push(property.toString() + ': ' + value);
//        }
//                 
//        return '{' + results.join(', ') + '}';
//}


function show(response) {
    console.log("Request handler 'show' was called.");
    
    var obj = {"id" : "1" , "name" : "gildong"};
    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(JSON.stringify(obj));
    response.end();
}

function img1(response){
    console.log("Request handler 'img1' was called.")
    fs.readFile('./Desert.jpg', "binary", function (err, file) {
        if (err) {
            return console.log(err);
        }
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(file, "binary");
        
        
        //response.writeHead(200, {"Content-Type": "text/html"});
        //response.write(JSON.stringify("<img src='/img1'/"));
        //response.write("<img src='/img1'/");
        
        response.end();
        
      });  
}


exports.iroomHTML = iroomHTML;
exports.iroomCSS = iroomCSS;
exports.iroomLOGO = iroomLOGO;
exports.show = show;
exports.img1 = img1;
