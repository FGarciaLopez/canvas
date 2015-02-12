( function() {
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
			controllerAs: 'submn'
		}
		return directive;
	};

	menuLateralController.$inject = ['$scope', 'StatusService', 'MazoService', 'Comportamientos', 'Objetivos', 'ExperienciaService', 'MenuLateralFactory'];
	function menuLateralController( $scope,  StatusService, MazoService, Comportamientos, Objetivos, ExperienciaService, MenuLateralFactory) {
		var sugmn = this;
		sugmn.abajo = abajo;
		sugmn.arriba = arriba;
		sugmn.cambiaModoSeleccion = cambiaModoSeleccion;
		sugmn.estaActivoModoSeleccion = estaActivoModoSeleccion;
		sugmn.estaEnTablero = estaEnTablero;
		sugmn.getAnterior = StatusService.pasoAnterior;
		sugmn.getSiguiente = StatusService.pasoSiguiente;
		sugmn.goHome = goHome;
		sugmn.irAnterior = irAnterior;
		sugmn.irSiguiente = StatusService.cambiarPaso;
		sugmn.tipo = $scope.tipo;
		sugmn.estaCompletado = estaCompletado;
		sugmn.close = MenuLateralFactory.close;
		sugmn.desplegado = function() { return MenuLateralFactory.desplegado }

		function abajo() { StatusService.cambiarAApartado( '#Abajo') }
		function arriba() { StatusService.cambiarAApartado( '#Arriba') }
		function cambiaModoSeleccion() { return StatusService.cambiarModoSeleccion()}
		function estaActivoModoSeleccion() { return StatusService.estaActivadoModoSeleccion() }
		function estaEnTablero() { return (StatusService.pasoActual()==='Tablero') }
		function goHome() { StatusService.cambiarPaso('Tablero') }
		function irAnterior() { StatusService.cambiarPaso( StatusService.pasoAnterior()) }
		function estaCompletado() {
			if (! MazoService.algunaSeleccionada( MazoService.get('componentes').cartas)) {
				return false;
			};
			if (! MazoService.algunaSeleccionada( MazoService.get('mecanicas').cartas)) {
				return false;
			};
			if (! MazoService.algunaSeleccionada( MazoService.get('motivadores').cartas)) {
				return false;
			};
			if (! MazoService.algunaSeleccionada( MazoService.get('disparadores').cartas)) {
				return false;
			};
			if( Comportamientos.postIts.length===0) {
				return false
			}
			if( Objetivos.postIts.length===0) {
				return false
			}
			return ExperienciaService.todosRellenos();
		}
	}
})();