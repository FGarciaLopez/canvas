(function() {
	'use strict';
	angular
		.module('lkCanvas')
		.controller('DisparadoresController' , disparadoresController);

	disparadoresController.$inject = ['Mazo'];
	function disparadoresController( Mazo) { 
		var dis = this;
		dis.mazo = Mazo.disparadores;
	}
})()