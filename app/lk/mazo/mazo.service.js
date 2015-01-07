// btnInclMotivador.service.js
( function() {
	'use strict';

	angular
		.module('lkCanvas')
		.factory('MazoService', MazoService);

	MazoService.$injector = ['StatusService']
	function MazoService(StatusService) {
		function Mazo( nombre, imagen, cartas) {
			this.nombre = nombre;
			this.imagen = imagen;
			this.cartas = cartas;
		}

		return {
			algunaSeleccionada: algunaSeleccionada,
			Mazo: Mazo,
			filtro: filtro
		}

		function filtro(valor) {
			if( StatusService.estaEnModoSeleccion()) {
				return true
			}
			return valor.seleccionado;
		}

		function algunaSeleccionada( cartas) {
			for (var i in cartas) {
				if( cartas[i].seleccionado)
					return true;
			}
			return false
		}
	};
}) ();
