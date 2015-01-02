( function() {

	'use strict';

	angular
		.module('lkCanvas')
		.directive('lkBtnInclMotivador', btnInclMotivador);
	
	
	function btnInclMotivador() {
		var directive = {
			restrict: 'E',
			scope: {
				type: "="
			},
			templateUrl: 'lk/motivadores/btnInclMotivador/btnInclMotivador.html',
			controller: btnInclMotivadoresController,
			controllerAs: 'btnIM'
		}
		return directive;
	};

	btnInclMotivadoresController.$inject = ['Cartas', 'CartasService'];

	function btnInclMotivadoresController( Cartas, CartasService) {
		var btnIM = this;
		btnIM.cartasMotivadores = Cartas.motivadores;
		btnIM.activaMotivadores = activaMotivadores;
		btnIM.estaActivoMotivadores = estaActivoMotivadores;
		btnIM.inclMotivador = inclMotivador;
		btnIM.exclMotivador = exclMotivador;
		btnIM.criterioMotivadores = criterioMotivadores;

		function activaMotivadores ( ) { 
			CartasService.activaMazo( 'motivadores');
		}

		function desactivaMotivadores() {
			if( estaActivoMotivadores()) {
				CartasService.desactivaMazo();
			}
		}

		function estaActivoMotivadores() {
			return CartasService.activaMazo()==='motivadores';
		}

		function inclMotivador ( motivador) {
			CartasService.inclCarta( motivador, ! motivador.seleccionado);
			desactivaMotivadores();
			//console.log("motivador",motivador)
		}

		function exclMotivador ( motivador) { 
			CartasService.exclCarta( motivador);
		}

		function criterioMotivadores() {
			return function() {
				return true;
			}
		}
	}


})()