(function() {
	'use strict';
	angular
		.module('lkCanvas')
		.controller('ObjetivosController' , objetivosController);

	objetivosController.$inject = ['Objetivos'];
	function objetivosController( Objetivos) { 
		var objs = this;
		objs.mazo = Objetivos;
	}

})()