(function() {
	'use strict';
	angular
		.module('lkCanvas')
		.controller('ComponentesController' , ComponentesController);

	ComponentesController.$inject = ['Mazo'];
	function ComponentesController( Mazo) { 
		var coms = this;
		coms.mazo = Mazo.componentes;
	}
})()