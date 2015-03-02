// postIt.directive.js
(function() {
    angular
        .module('lkCanvas')
        .directive('lkMsgModal', lkMsgModal)
        .directive('lkMsgContent', lkMsgContent)
        .directive('lkMsgMenu', lkMsgMenu)
        .directive('lkMsgOption', lkMsgOption);

    /* @ngInject */
    function lkMsgModal () {
        // Usage:lk-msg-ok
        //
  		var directive = {
			restrict: 'E',
			scope: {
				'activate': '=lkActivate',
				'close': '=lkClose'
			},
			controller: lkMsgModalController,
			replace: true,
			transclude: true,
			templateUrl:  'lk/msg-modal/msg-modal.html',
			controllerAs: 'lkm'
		}
		return directive;
    }

    /* @ngInject */
    function lkMsgContent () {
        // Usage:lk-msg-ok
        //
  		var directive = {
			restrict: 'E',
			scope: {
			},
			replace: true,
			transclude: true,
			templateUrl:  'lk/msg-modal/msg-content.html'
		}
		return directive;
    }

    /* @ngInject */
    function lkMsgMenu () {
        // Usage:lk-msg-ok
        //
  		var directive = {
			restrict: 'E',
			scope: {
			},
			replace: true,
			transclude: true,
			templateUrl:  'lk/msg-modal/msg-menu.html'
		}
		return directive;
    }
    /* @ngInject */
    function lkMsgOption () {
        // Usage:lk-msg-ok
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
				return 'lk/msg-modal/msg-option.html'	
				var tipo;
				if( typeof attrs.ok !== "undefined")
					tipo = 'ok';
				else if (typeof attrs.cancel !== "undefined")
					tipo = 'cancel'
				else
					return null;
				return 'lk/msg-modal/msg-'+tipo+'.html'	
			} ,
			controller: lkMsgOptionController,
			controllerAs: 'lkmm'
		}
		return directive;
    }

	lkMsgModalController.$inject = ['$scope'];
	function lkMsgModalController( $scope){ 
		var lkm = this;
		lkm.activate = $scope.activate;
		lkm.close = $scope.close;

		function cerrar() {
			$scope.activate = false;
		}

	}

	lkMsgOptionController.$inject = ['$scope'];
	function lkMsgOptionController( $scope){ 
		var lkmm = this;
		lkmm.click = click;

		function click( ) {
			if($scope.click) {
				console.log("click en ", $scope);
				$scope.click();
			}
		}

	}
})();