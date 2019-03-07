var express = require("express");
var app = express();
var port = process.env.PORT||3000;

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(port, function(){
  console.log('Server On!');
});