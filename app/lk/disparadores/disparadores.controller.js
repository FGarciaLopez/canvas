(function() {
	'use strict';
	angular
		.module('lkCanvas')
		.controller('DisparadoresController' , disparadoresController);

	disparadoresController.$inject = ['Cartas'];
	function disparadoresController( Cartas) { 
		var dis = this;
		dis.mazo = Cartas.disparadores;
	}
})()