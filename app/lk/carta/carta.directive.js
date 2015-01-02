// carta.directive.js
(function() {
    'use strict';

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

	lkCartaController.$inject = ['$scope', 'CartaService'];
	function lkCartaController( $scope, CartaService) {
		var dc = this;
		dc.incluir = incluir;
		dc.excluir = excluir;
		dc.estaSeleccionada =estaSeleccionada;
		dc.algunaSeleccionada = algunaSeleccionada;
		dc.conmutar = conmutar;
		dc.getImagen =  getImagen;

		function incluir() { 
			CartaService.select( $scope.mazo, $scope.carta);
		}

		function conmutar() { CartaService.onOff( $scope.mazo, $scope.carta)}

		function excluir( ) { CartaService.unselect( $scope.mazo, $scope.carta) }

		function estaSeleccionada( ) { return CartaService.isSelected( $scope.carta) }

		function algunaSeleccionada( ) { return CartaService.someSelected( $scope.mazo) }

		function getImagen() {
			var imagen = '/img/';
			imagen = imagen + $scope.mazo.imagen+'/';
			if( $scope.carta.seleccionado)
				imagen = imagen + $scope.carta.imagen
			else 
				imagen = imagen + $scope.mazo.imagen;
			imagen = imagen + '.svg';
			return imagen;
		}
		// function imagen() { return CartaService.getImage( $scope.carta)}
	}
})();