var http = require('http');
var url = require('url');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }
  
  var port = process.env.port || 1337;
  http.createServer(onRequest).listen(port);
  console.log("Server has started.");
}

var handle = {};
handle["/"] = requestHandlers.start;
handle["/schedules"] = requestHandlers.schedules;
handle["/waittimes"] = requestHandlers.waittimes;

start(router.route, handle);
