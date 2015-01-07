(function() {
	'use strict';
	angular
		.module('lkCanvas')
		.controller('DisparadoresController' , disparadoresController);

	disparadoresController.$inject = ['Mazo', 'MazoService'];
	function disparadoresController( Mazo, MazoService) { 
		var dis = this;
		dis.mazo = Mazo.disparadores;
		dis.filtro = MazoService.filtro;
	}
})()