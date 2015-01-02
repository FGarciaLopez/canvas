'use strict';

/**
* Dependencias
*/
var express = require('express');
var confExpresss = require('./config/express');
var http = require('http');
//var https = require('./config/https');
var config = require('./config/environment');

/*
* Variables y configuración
*/
config.app = express();
config.port = process.env.npm_package_PORT;
var app = config.app;
app.set("env", process.env.npm_package_ENV);

/*
* Middleware
*/
console.log("app ", config.app);
confExpresss(app);
var httpServer = http.createServer(app);
app.use(express.static('./app'));
// TODO: var httpServer = https(app);

//Abrir puertos
if( !module.parent) {
	httpServer.listen(config.port, function() {
	    console.log('Escuchando puerto %d', config.port);
	});
} else {
	module.export = httpServer;
}
