(function() {
	'use strict';
	angular
		.module('lkCanvas')
		.controller('ComponentesController' , componentesController);

	componentesController.$inject = ['Cartas'];
	function componentesController( Cartas) { 
		var coms = this;
		coms.cartasComponentes = Cartas.componentes;
	}
})()