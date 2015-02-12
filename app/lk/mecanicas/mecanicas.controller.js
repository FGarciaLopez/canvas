(function() {
	angular
		.module('lkCanvas')
		.controller('MecanicasController' , mecanicasController);
	mecanicasController.$inject = ['Mazo', 'MazoService'];
	function mecanicasController(Mazo, MazoService) { 
		var mecs = this;
		// mecs.cartasMotivadores = Mazo.motivadores;
		mecs.mazo = getMecanicas( Mazo.motivadores);
		mecs.filtro = MazoService.filtro;

		function getMecanicas( motivadores) {
			var mazo = Mazo.mecanicas;
			for(var i in mazo.cartas) {
				mazo.cartas[i].activo = MazoService.algunaSeleccionada( mazo.cartas[i].motivadores);
			}
			return mazo;
		}

	}

})();