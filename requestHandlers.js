var querystring = require("querystring");
var DisneyAPI = require("./api");
var api = new DisneyAPI();

function start(response) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head><title>Welcome!</title>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '/schedules<br />'+
    '/waittimes<br />'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function schedules(response) {
    api.MagicKingdom.GetSchedules(function(error, data) {
	var output = JSON.stringify(data, null, 2);
	response.writeHead(200, {"Content-Type": "application/json"});
	response.write(output);
	response.end();
    });
}

function waittimes(response) {
    if (id === "80007944") {
	    api.MagicKingdom.GetWaitTimes(function(error, data) {
		var output = JSON.stringify(data, null, 2);
		response.writeHead(200, {"Content-Type": "application/json"});
		response.write(output);
		response.end();
	    });
    } else {
	    api.Epcot.GetWaitTimes(function(error, data) {
		var output = JSON.stringify(data, null, 2);
		response.writeHead(200, {"Content-Type": "application/json"});
		response.write(output);
		response.end();
	    });
    }
}

exports.start = start;
exports.schedules = schedules;
exports.waittimes = waittimes;
