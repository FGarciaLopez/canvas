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

	MenuController.$inject = ['$scope', 'StatusService', 'MazoService', 'Comportamientos', 'Objetivos', 'ExperienciaService'];
	function MenuController( $scope,  StatusService, MazoService, Comportamientos, Objetivos, ExperienciaService) {
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
		menu.estaCompletado = estaCompletado;
		function abajo() { StatusService.cambiarAApartado( '#Abajo') }
		function arriba() { StatusService.cambiarAApartado( '#Arriba') }
		function cambiaModoSeleccion() { return StatusService.cambiarModoSeleccion()}
		function estaActivoModoSeleccion() { return StatusService.estaActivadoModoSeleccion() }
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