var querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable");


function iroomHTML(response) {
    console.log("Request handler 'iroomHTML' was called.");
    fs.readFile('./iroomPage01.1.html', 'utf8', function (err,data){
        if (err) {
            return console.log(err);
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    });
}
function iroomCSS(response){
    console.log("Request handler 'iroomCSS' was called.");
    fs.readFile('./iroomPage01.css', function (err, data){
        if (err) {
            return console.log(err);
        }
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(data);
        response.end();
      });  
}
function iroomLOGO(response){
    console.log("Request handler 'iroomLOGO' was called.");
    fs.readFile('./iroomLogo.png', "binary", function (err, file){
        if (err) {
            return console.log(err);
        }
        response.writeHead(200, {'Content-Type': 'image/png'});
        response.write(file, "binary");
        response.end();
      });  
}


/*
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


function show(response) {
  console.log("Request handler 'show' was called.");
  fs.readFile("./testImg.png", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}
*/



exports.iroomHTML = iroomHTML;
exports.iroomCSS = iroomCSS;
exports.iroomLOGO = iroomLOGO;

//exports.upload = upload;
//exports.show = show;