// disparadores.value.js
(function() {
	'use strict';

	angular
		.module('lkCanvas')
		.value( 'Objetivos', new Objetivos());

	function Objetivos() {
		this.postIts = [];
		this.name = "objetivos";
	}
})();	