'use strict';
var app;
var environmentVariables = {
	root: root,
	lastVersion: "0.0.0",
	port: 8081,
	app: app,
	env: 'development',
	  // Secret for session, you will want to change this and make it an environment variable
	secrets: {
		session: 'Platero y yo' // secret
	}
}

module.exports = environmentVariables;
