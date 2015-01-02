// postIt.directive.js
(function() {
    'use strict';

    angular
        .module('lkCanvas')
        .directive('lkPostIt', lkPostIt);

    /* @ngInject */
    function lkPostIt () {
        // Usage:lk-post-it
        //
        // Creates:
        //
  		var directive = {
			restrict: 'E',
			scope: {
				type: "=",
				post: "=",
				mazo: "=",
				imagen: "=",
				eliminar: "="
			},
			templateUrl: function (scope, attrs) {
				if ( attrs.type=="crear") return 'lk/postIt/postIt-new.html'
				return 'lk/postIt/postIt.html'
			},
			controller: lkPostItController,
			controllerAs: 'dpi'
		}
		return directive;
    }

	lkPostItController.$inject = ['$scope', 'PostItService'];
	function lkPostItController( $scope, PostItService) {
		var dpi = this;
		dpi.eliminando = false;
		dpi.postItEdit = false;
		dpi.crear = crear;
		dpi.editar = editar;
		dpi.guardar = guardar;
		dpi.eliminar = eliminar;
		dpi.cancelar = cancelar;
		dpi.estaSeleccionado =estaSeleccionado;
		dpi.haySeleccionado = haySeleccionado;
		dpi.eliminar = eliminar;
		dpi.mostrarEliminar = mostrarEliminar;
		dpi.ocultarEliminar = ocultarEliminar;
		dpi.imagen = $scope.imagen;

		function crear() { dpi.postItEdit = PostItService.crear( $scope.mazo) }

		function editar( ) { dpi.postItEdit = PostItService.editar( $scope.mazo, $scope.post) }

		function mostrarEliminar() {
			if( $scope.eliminar == false) return false;
			return !dpi.haySeleccionado();
		}
		function ocultarEliminar() {
			if( $scope.eliminar == false) return true;
			return dpi.haySeleccionado() || dpi.eliminando;
		}
		function guardar( ) { 
			dpi.postItEdit = PostItService.guardar( $scope.mazo, dpi.postItEdit) }

		function eliminar( ) { PostItService.eliminar( $scope.mazo, $scope.post) }

		function cancelar() { dpi.postItEdit = PostItService.cancelar( $scope.mazo) }

		function estaSeleccionado( ) { return PostItService.isSelected( $scope.post) }

		function haySeleccionado( ) { return PostItService.haySeleccionado( $scope.mazo) }
	}
})();