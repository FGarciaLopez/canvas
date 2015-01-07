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
		menu.abajo = abajo;
		menu.arriba = arriba;
		menu.cambiaModoSeleccion = cambiaModoSeleccion;
		menu.estaActivoModoSeleccion = estaActivoModoSeleccion;
		menu.estaEnTablero = estaEnTablero;
		menu.getAnterior = StatusService.pasoAnterior;
		menu.getSiguiente = StatusService.pasoSiguiente;
		menu.goHome = goHome;
		menu.irAnterior = irAnterior;
		menu.irSiguiente = StatusService.cambiarPaso;
		menu.tipo = $scope.tipo;

		function abajo() { StatusService.cambiarAApartado( '#Abajo') }
		function arriba() { StatusService.cambiarAApartado( '#Arriba') }
		function cambiaModoSeleccion() { return StatusService.cambiarModoSeleccion()}
		function estaActivoModoSeleccion() { return StatusService.estaActivadoModoSeleccion() }
		function estaEnTablero() { return (StatusService.pasoActual()==='Tablero') }
		function goHome() { StatusService.cambiarPaso('Tablero') }
		function irAnterior() { StatusService.cambiarPaso( StatusService.pasoAnterior()) }

	}
})()