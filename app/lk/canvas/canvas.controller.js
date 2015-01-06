(function() {
	'use strict';
	angular
		.module('lkCanvas')
		.controller('CanvasController' , canvasController);

	canvasController.$inject = ['Mazo', '$location'];

	function canvasController( Mazo, $location ) { 
		var canvas = this;
		canvas.numOfSelected = numOfSelected;
		canvas.irA = irA;

		function irA( destino) {
			console.log("irA", destino)
			$location.path(destino);
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
			return (!cuantas)? 'No hay ninguna carta seleccionada todavía': 'Has seleccionado '+cuantas;
		}
	}
})()