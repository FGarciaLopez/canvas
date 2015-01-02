// disparadores.value.js
(function() {
	'use strict';

	angular
		.module('lkCanvas')
		.value( 'Comportamientos',  new Comportamientos());

	function Comportamientos() {
		this.postIts = [];
		this.name = "comportamientos";
		// this.seleccionado = false;
	}
})();	