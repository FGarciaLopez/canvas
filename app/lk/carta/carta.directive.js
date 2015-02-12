// carta.directive.js
(function() {
    angular
        .module('lkCanvas')
        .directive('lkCarta', lkCarta);

    /* @ngInject */
    function lkCarta () {
        // Usage:lk-carta
        //
        // Creates:
        //
  		var directive = {
			restrict: 'E',
			scope: {
				type: "=",
				carta: "=",
				mazo: "="
			},
			templateUrl: function (scope, attrs) {
				if ( attrs.type=="crear") return 'lk/carta/carta-new.html'
				return 'lk/carta/carta.html'
			},
			controller: lkCartaController,
			controllerAs: 'dc'
		}
		return directive;
    }

	lkCartaController.$inject = ['$scope', 'CartaService', 'StatusService'];
	function lkCartaController( $scope, CartaService, StatusService) {
		var dc = this;
		dc.algunaSeleccionada = algunaSeleccionada;
		dc.conmutar = conmutar;
		dc.estaModoSeleccion = estaModoSeleccion;
		dc.estaSeleccionada =estaSeleccionada;
		dc.getImagen =  getImagen;

		function algunaSeleccionada( ) { return CartaService.someSelected( $scope.mazo) }
		function estaModoSeleccion() { return StatusService.estaEnModoSeleccion() }
		function estaSeleccionada( ) { return CartaService.isSelected( $scope.carta) }
		function conmutar() { 
			if( StatusService.estaEnModoSeleccion()) 
				CartaService.onOff( $scope.mazo, $scope.carta) 
		}
		function getImagen() { return CartaService.getImage( $scope.mazo, $scope.carta) }
	}
})();