var querystring = require("querystring");
var DisneyAPI = require("./api");
var api = new DisneyAPI();

function start(response) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload" multiple="multiple">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function attractions(response) {
    api.MagicKingdom.GetWaitTimes(function(error, data) {
	var output = JSON.stringify(data, null, 2);
	response.writeHead(200, {"Content-Type": "application/json"});
	response.write(output);
	response.end();
    });
}

exports.start = start;
exports.attractions = attractions;
