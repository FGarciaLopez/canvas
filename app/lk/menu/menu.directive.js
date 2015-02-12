( function() {
	angular
		.module('lkCanvas')
		.directive('lkMenu', lkMenu);
	
	function lkMenu() {
		var directive = {
			restrict: 'EA',
			scope: {
				type: "="
			},
			templateUrl: 'lk/menu/menu.html',
			controller: MenuController,
			controllerAs: 'menu'
		}
		return directive;
	};

	MenuController.$inject = ['$scope', 'StatusService', 'MazoService', 'Comportamientos', 'Objetivos', 'ExperienciaService', 'MenuLateralFactory'];
	function MenuController( $scope,  StatusService, MazoService, Comportamientos, Objetivos, ExperienciaService, MenuLateralFactory) {
		var menu = this;
		menu.abajo = abajo;
		menu.arriba = arriba;
		menu.cambiaModoSeleccion = StatusService.cambiarModoSeleccion;
		menu.desplegado = MenuLateralFactory.isDesplegado;
		menu.estaActivoModoSeleccion = StatusService.estaActivadoModoSeleccion;
		menu.estaCompletado = estaCompletado;
		menu.estaEnModoSeleccion = StatusService.estaEnModoSeleccion;
		menu.estaEnTablero = estaEnTablero;
		menu.getAnterior = StatusService.pasoAnterior;
		menu.getSiguiente = StatusService.pasoSiguiente;
		menu.goHome = goHome;
		menu.irAnterior = irAnterior;
		menu.irSiguiente = StatusService.cambiarPaso;
		menu.tipo = $scope.tipo;
		menu.toggle = MenuLateralFactory.toggle;

		function abajo() { StatusService.cambiarAApartado( '#Abajo') }
		function arriba() { StatusService.cambiarAApartado( '#Arriba') }
		function estaEnTablero() { return (StatusService.pasoActual()==='Tablero') }
		function goHome() { console.log("voy"); StatusService.cambiarPaso('Tablero') }
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