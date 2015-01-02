(function() {
	'use strict';
	angular
		.module('lkCanvas')
		.controller('MotivadoresController' , MotivadoresController);

	MotivadoresController.$inject = ['Cartas'];
	function MotivadoresController( Cartas) { 
		var mots = this;
		mots.mazo = Cartas.motivadores;
	}
})()