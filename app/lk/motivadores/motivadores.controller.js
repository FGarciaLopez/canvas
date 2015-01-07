(function() {
	'use strict';
	angular
		.module('lkCanvas')
		.controller('MotivadoresController' , MotivadoresController);

	MotivadoresController.$inject = ['Mazo', 'MazoService'];
	function MotivadoresController( Mazo, MazoService) { 
		var mots = this;
		mots.mazo = Mazo.motivadores;
		mots.filtro = MazoService.filtro;
	}
})()