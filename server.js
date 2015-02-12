'use strict';

/**
* Dependencias
*/
var express = require('express');
var confExpresss = require('./config/express');
var http = require('http');
//var https = require('./config/https');
var config = require('./config/environment');
var env = process.env.NODE_ENV || 'production'

/*
* Variables y configuración
*/
config.app = express();
config.port = process.env.PORT || 8080;
var app = config.app;
app.set("env", env);

/*
* Middleware
*/
confExpresss(app);
var httpServer = http.createServer(app);
if( env === 'development') {
	app.use(express.static('./app'));
	console.log('Entorno de desarrollo:', env);
} else {
	app.use(express.static('./dist'));
	console.log("Entorno producción:", env)
}

// TODO: var httpServer = https(app);

//Abrir puertos
if( !module.parent) {
	httpServer.listen(config.port, function() {
		debugger;
	    console.log('Escuchando puerto %d', config.port);
	});
} else {
	module.export = httpServer;
}

