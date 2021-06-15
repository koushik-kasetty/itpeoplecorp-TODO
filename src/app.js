'use strict'
process.env.NODE_ENV = process.env.NODE_ENV || 'local';
var express = require('express');
var http = require('http');
var fs = require("fs");
var bodyParser = require('body-parser');
var app = express();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


var config = { port: 3000 };

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


//loading all controllers
fs.readdirSync(__dirname + '/controller')
  .filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function (file) {
    var route = require('./controller/' + file)
    route.Controller(app);
  });

var server = http.createServer( app);

server.listen(config.port || 3000, function () {
  console.log('Service Application is running on port ::' + config.port)
});
module.exports = app;