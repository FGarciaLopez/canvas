// btnInclMotivador.service.js
( function() {
	'use strict';

	angular
		.module('lkCanvas')
		.factory('MazoService', MazoService);

	MazoService.$injector = ['StatusService', '$rootScope', 'Mazo', '$location']
	function MazoService(StatusService, $rootScope, Mazo, $location) {
        // Cuando ha cambiado la ruta, activa o no el modo selección en el correspondiente mazo
        $rootScope.$on('$locationChangeSuccess', function(event, next, current) {
        	console.log("entro", next);
			var activadoModoSeleccion = (StatusService.seccionesConCartas.indexOf($location.path()) >= 0);
			StatusService.activarModoSeleccion(activadoModoSeleccion)
			if( activadoModoSeleccion) {
			 var mazo = mazoService.get($location.path().replace('/','').replace('#',''))
			 var modoSeleccion = ! algunaSeleccionada(mazo.cartas);
			 StatusService.cambiarModoSeleccion( modoSeleccion);
			}
        })

		var mazoService = {
			algunaSeleccionada: algunaSeleccionada,
			filtro: filtro,
			get: get
		}
		return mazoService;

		function filtro(valor) {
			if( ! StatusService.estaActivadoModoSeleccion() ) {
				StatusService.activarModoSeleccion();
				StatusService.cambiarModoSeleccion( true);
				return true;
			}
			if( StatusService.estaEnModoSeleccion()) {

				return true
			}
			return valor.seleccionado;
		}

		function get( nombre) {
			return Mazo[nombre];
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
