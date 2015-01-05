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

	menuLateralController.$inject = ['$scope', '$location'];
	function menuLateralController( $scope, $location) {
		var menu = this;
		menu.tipo = $scope.tipo;
		menu.arriba = arriba;
		menu.abajo = abajo;

		function arriba() {
			goSection('#Arriba');
		}
		function abajo() {
			goSection('#Abajo');
		}

		function goSection( section) {
			var url = $location.url();
			if( url.indexOf( section) < 0) {
				if( url.lastIndexOf('#') > 0)
					url = url.substring(0, url.lastIndexOf('#'));
				$location.url(url+section);
			}
		}
	}
})()