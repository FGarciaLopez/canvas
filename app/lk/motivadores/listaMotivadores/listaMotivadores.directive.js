( function() {

	'use strict';

	angular
		.module('lkCanvas')
		.directive('lkListaMotivadores', lkListaMotivadores);
	
	function lkListaMotivadores() {
		var directive = {
			restrict: 'E',
			scope: {
				type: "="
			},
			templateUrl: function (scope, attrs) {
				return 'lk/motivadores/listaMotivadores/listaMotivadores-'+attrs.type+'.html'
			},
			controller: listaMotivadoresController,
			controllerAs: 'lms'
		}
		return directive;
	};

	listaMotivadoresController.$inject = ['Cartas', 'CartasService'];
	function listaMotivadoresController( Cartas, CartasService) {
		var lms = this;

		// Datos
		lms.cartasMotivadores = Cartas.motivadores;
		lms.motivadorActivo = false;

		// Funciones
		lms.activarMotivador = activarMotivador;
		lms.exclMotivador = exclMotivador;
		lms.criterioMotivadores = criterioMotivadores;

		function exclMotivador () {

		}

		function criterioMotivadores() {
			
		}

		function activarMotivador ( motivador) {
			if( CartasService.cartaActiva('motivadores') === motivador) {
				CartasService.desactivaCarta( 'motivadores', motivador);
			} else {
				CartasService.activaCarta( 'motivadores', motivador);
			}
		}

	}


})()