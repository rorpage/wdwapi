var http = require("http");
var url = require("url");
var router = require("router");
var requestHandlers = require("requestHandlers");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

var handle = {};
handle["/"] = requestHandlers.start;
handle["/attractions"] = requestHandlers.attractions;

start(router.route, handle);
