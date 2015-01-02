/**
 * Express configuration
 */
var express = require('express');
var path = require('path');

//var favicon = require('static-favicon');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

module.exports = function( app) {

	app.use(logger('combined'));
	//app.use(logger('dev'));
	app.use(bodyParser.json( { inflate: true, strict: false}));
	app.use(bodyParser.urlencoded({ extended: false }));
	//app.use(cookieParser());
	
	var env = app.get('env');
	
	// development error handler
	// will print stacktrace
	if (env === 'development') {
		console.log("desarrollo");
	    app.use(function(err, req, res, next) {
	        res.status(err.status || 500);
	        res.render('error', {
	            message: err.message,
	            error: err
	        });
	    });
	}

	// production error handler
	// no stacktraces leaked to user
	app.use(function(err, req, res, next) {
		console.log('err.stack');
		//console.log(err.stack);
	    res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
/*	    res.render('error', {
	        message: err.message,
	        error: {}
	    });
*/
	});

}