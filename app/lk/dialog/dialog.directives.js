// postIt.directive.js
(function() {
    angular
        .module('lkCanvas')
        .directive('lkDialog', lkDialog)
        .directive('lkDialogContent', lkDialogContent)
        .directive('lkDialogMenu', lkDialogMenu)
        .directive('lkDialogOption', lkDialogOption);

    /* @ngInject */
    function lkDialog () {
        // Usage:lk-Dialog-ok
        //
  		var directive = {
			restrict: 'E',
			scope: {
				'activate': '=lkActivate',
				'close': '=lkClose'
			},
			controller: lkDialogController,
			replace: true,
			transclude: true,
			templateUrl:  'lk/dialog/dialog.html',
			controllerAs: 'lkm'
		}
		return directive;
    }

    /* @ngInject */
    function lkDialogContent () {
        // Usage:lk-dialog-ok
        //
  		var directive = {
			restrict: 'E',
			scope: {
			},
			replace: true,
			transclude: true,
			templateUrl:  'lk/dialog/dialog-content.html'
		}
		return directive;
    }

    /* @ngInject */
    function lkDialogMenu () {
        // Usage:lk-dialog-ok
        //
  		var directive = {
			restrict: 'E',
			scope: {
			},
			replace: true,
			transclude: true,
			templateUrl:  'lk/dialog/dialog-menu.html'
		}
		return directive;
    }
    /* @ngInject */
    function lkDialogOption () {
        // Usage:lk-dialog-ok
        //
  		var directive = {
			restrict: 'E',
			scope: {
				'ok': '=',
				'cancel': '=',
				'click': '=lkClick'
			},
			replace: true,
			transclude: true,
			templateUrl:  function(elemnt, attrs) {
				return 'lk/dialog/dialog-option.html'	
				var tipo;
				if( typeof attrs.ok !== "undefined")
					tipo = 'ok';
				else if (typeof attrs.cancel !== "undefined")
					tipo = 'cancel'
				else
					return null;
				return 'lk/dialog/dialog-'+tipo+'.html'	
			} ,
			controller: lkDialogOptionController,
			controllerAs: 'lkmm'
		}
		return directive;
    }

	lkDialogController.$inject = ['$scope'];
	function lkDialogController( $scope){ 
		var lkm = this;
		lkm.activate = $scope.activate;
		lkm.close = $scope.close;

		function cerrar() {
			$scope.activate = false;
		}

	}

	lkDialogOptionController.$inject = ['$scope'];
	function lkDialogOptionController( $scope){ 
		var lkmm = this;
		lkmm.click = click;

		function click( ) {
			if($scope.click) {
				$scope.click();
			}
		}

	}
})();