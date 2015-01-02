(function() {
	'use strict';
	angular
		.module('lkCanvas')
		.controller('ComponentesController' , componentesController);

	componentesController.$inject = ['Mazo'];
	function componentesController( Mazo) { 
		var coms = this;
		coms.cartasComponentes = Mazo.componentes;
	}
})()