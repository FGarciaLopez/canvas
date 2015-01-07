( function() {

	'use strict';

	angular
		.module('lkCanvas')
		.directive('lkMenuLateral', lkMenuLateral);
	
	function lkMenuLateral() {
		var directive = {
			restrict: 'EA',
			scope: {
				type: "="
			},
			templateUrl: 'lk/menuLateral/menuLateral.html',
			controller: menuLateralController,
			controllerAs: 'menu'
		}
		return directive;
	};

	menuLateralController.$inject = ['$scope', 'StatusService'];
	function menuLateralController( $scope,  StatusService) {
		var menu = this;
		menu.tipo = $scope.tipo;
		menu.abajo = abajo;
		menu.arriba = arriba;
		menu.cambiaModoSeleccion = cambiaModoSeleccion;
		menu.estaActivoModoSeleccion = estaActivoModoSeleccion;
		menu.irSiguiente = StatusService.cambiarPaso;
		menu.getSiguiente = StatusService.pasoSiguiente;

		function abajo() { StatusService.cambiarAApartado( '#Abajo') }
		function arriba() { StatusService.cambiarAApartado( '#Arriba') }
		function cambiaModoSeleccion() { return StatusService.cambiarModoSeleccion()}
		function estaActivoModoSeleccion() { return StatusService.estaActivadoModoSeleccion() }

	}
})()