( function() {

	'use strict';

	// Declare app level module which depends on views, and components
	angular.module('lkCanvas', [
	  'ngRoute']).
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.otherwise({redirectTo: '/canvas'});
	}]);
})()
