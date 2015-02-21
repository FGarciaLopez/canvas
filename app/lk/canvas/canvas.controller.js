(function() {
	angular
		.module('lkCanvas')
		.controller('CanvasController' , canvasController);

	canvasController.$inject = ['Mazo', 'StatusService'];

	function canvasController( Mazo, StatusService ) { 
		var canvas = this;
		canvas.numOfSelected = numOfSelected;
		canvas.irA = irA;

		function irA( destino) {
			StatusService.cambiarPaso(destino);
		}

		function numOfSelected(nombreMazo) {
			var cartas, cuantas=0;
			if(nombreMazo === 'disparadores') {
				cartas = Mazo.disparadores.cartas;
			} else if(nombreMazo === 'motivadores') {
				cartas = Mazo.motivadores.cartas;
			} else if(nombreMazo === 'mecanicas') {
				cartas = Mazo.mecanicas.cartas;
			} else if(nombreMazo === 'componentes') {
				cartas = Mazo.componentes.cartas;
			} else{
				return null;
			}
			for(var i in cartas) {
				if(cartas[i].seleccionado) cuantas++;
			}
			return cuantas+' seleccionadas' //(cuantas)? 'Has seleccionado '+cuantas: 'No hay ninguna carta seleccionada todavía';
		}
	}
})();