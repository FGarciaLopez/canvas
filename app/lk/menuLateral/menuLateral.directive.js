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
		var submn = this;
		submn.cambiaModoSeleccion = StatusService.cambiarModoSeleccion;
		submn.close = MenuLateralFactory.close;
		submn.desplegado = MenuLateralFactory.isDesplegado;
		submn.estaActivoModoSeleccion = StatusService.estaActivadoModoSeleccion;
		submn.estaCompletado = estaCompletado;
		submn.estaEnModoSeleccion = StatusService.estaEnModoSeleccion;
		//submn.estaEnTablero = estaEnTablero;
		//submn.getAnterior = StatusService.pasoAnterior;
		//submn.getSiguiente = StatusService.pasoSiguiente;
		//submn.goHome = goHome;
		//submn.irAnterior = irAnterior;
		submn.irSiguiente = irSiguiente;
		submn.estaActivo = estaActivo;
		submn.pasos = StatusService.pasos;

		//function estaEnTablero() { return (StatusService.pasoActual()==='Tablero') }
		//function goHome() { StatusService.cambiarPaso('Tablero'); submn.close(); }
		//function irAnterior() { StatusService.cambiarPaso( StatusService.pasoAnterior()) }
		function irSiguiente( nombre) {
			StatusService.cambiarPaso( nombre);
			submn.close();
		}
		function estaActivo( nombrePaso) { return StatusService.pasoActual() === nombrePaso}
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