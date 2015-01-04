// btnInclMotivador.service.js
( function() {
	'use strict';

	angular
		.module('lkCanvas')
		.factory('MazoService', MazoService);

	function MazoService() {

		function Mazo( nombre, imagen, cartas) {
			this.nombre = nombre;
			this.imagen = imagen;
			this.cartas = cartas;
		}

		return {
			copy: copy,
			algunaSeleccionada: algunaSeleccionada,
			Mazo: Mazo
		}

		function copy( mazo) {
			var nuevo = new Mazo( mazo.nombre, mazo.imagen, [] );
			for( var i in mazo.cartas) {
				nuevo.cartas.push(mazo.cartas[i])
			}
			return nuevo;
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
