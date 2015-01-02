(function() {
	'use strict';
	angular
		.module('lkCanvas')
		.controller('MecanicasController' , mecanicasController);
	mecanicasController.$inject = ['Mazo', 'MazoService'];

	function mecanicasController(Mazo, MazoService) { 
		var mecs = this;
		mecs.cartasMotivadores = Mazo.motivadores;
		mecs.mazo = getMecanicas( Mazo.motivadores);

		function getMecanicas( motivadores) {
			var mazo = MazoService.copy( Mazo.mecanicas);
			for(var i in mazo.cartas) {
				if( ! mazo.cartas[i].algunMotivadorSeleccionado()) {
					//mazo.cartas.splice( i, 1);
				} else {
					// console.log("seleccionado", mazo.cartas[i])
				}
			}
			// console.log(mazo);
			return mazo;
		}
	}

})()