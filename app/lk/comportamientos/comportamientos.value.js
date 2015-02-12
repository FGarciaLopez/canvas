// disparadores.value.js
(function() {
	angular
		.module('lkCanvas')
		.value( 'Comportamientos',  new Comportamientos());

	function Comportamientos() {
		this.postIts = [];
		this.name = "comportamientos";
		// this.seleccionado = false;
	}
})();