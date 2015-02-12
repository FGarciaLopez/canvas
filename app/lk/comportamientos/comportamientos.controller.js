(function() {
	angular
		.module('lkCanvas')
		.controller('ComportamientosController' , comportamientosController);

	comportamientosController.$inject = ['Comportamientos'];
	function comportamientosController( Comportamientos) { 
		var cmps = this;
		cmps.mazo = Comportamientos;
	}

})();