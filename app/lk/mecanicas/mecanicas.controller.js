(function() {
	'use strict';
	angular
		.module('lkCanvas')
		.controller('MecanicasController' , mecanicasController);
	mecanicasController.$inject = ['Cartas'];

	function mecanicasController(Cartas) { 
		var mots = this;
		mots.cartasMotivadores = Cartas.motivadores;
		mots.cartasMecanicas = Cartas.mecanicas;
	}

})()