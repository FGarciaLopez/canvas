(function() {
	'use strict';
	angular
		.module('lkCanvas')
		.controller('MotivadoresController' , MotivadoresController);

	MotivadoresController.$inject = ['Mazo'];
	function MotivadoresController( Mazo) { 
		var mots = this;
		mots.mazo = Mazo.motivadores;
	}
})()