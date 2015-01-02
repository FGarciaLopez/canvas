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

	menuLateralController.$inject = ['$scope'];
	function menuLateralController( $scope) {
		var menu = this;
		menu.tipo = $scope.tipo
	}
})()