(function() {
	'use strict';
	angular
		.module('lkCanvas')
		.controller('ComponentesController' , ComponentesController);

	ComponentesController.$inject = ['Mazo', 'MazoService'];
	function ComponentesController( Mazo, MazoService) { 
		var coms = this;
		coms.mazo = Mazo.componentes;
		coms.filtro = MazoService.filtro;
	}
})()