( function() {
	angular
		.module('lkCanvas')
		.directive('lkListaMecanicas', lkListaMecanicas);
	
	function lkListaMecanicas() {
		var directive = {
			restrict: 'E',
			scope: {
				type: "="
			},
			templateUrl: function (scope, attrs) {
				return 'lk/mecanicas/listaMecanicas/listaMecanicas-'+attrs.type+'.html'
			},
			controller: listaMecanicasController,
			controllerAs: 'lme'
		}
		return directive;
	};

	listaMecanicasController.$inject = ['Cartas', 'CartasService'];
	function listaMecanicasController( Cartas, CartasService) {
		var lme = this;
		lme.mecanicaActiva = false;
		lme.cartasMecanicas = Cartas.mecanicas;
		lme.inclMecanica = inclMecanica;
		lme.exclMecanica = exclMecanica;
		lme.criterioMecanicas = criterioMecanicas;
		lme.activarMecanica = activarMecanica;

		function activarMecanica ( mecanica) { 
			CartasService.activaCarta('mecanicas', mecanica);
	/*		for( var i in Cartas.mecanicas) {
				Cartas.mecanicas[i].activo = false;
			}
			if( mecanica === false || mecanica == lme.mecanicaActiva) {
				lme.mecanicaActiva = false
			} else {
				lme.mecanicaActiva = mecanica
				mecanica.activo = true;
			}
	*/	}

		function inclMecanica ( mecanica) { 
			console.log("inclMecanica")
			CartasService.inclCarta( mecanica, ! mecanica.seleccionado);
		}

		function exclMecanica( mecanica) { 
			CartasService.exclCarta( 'mecanicas', mecanica);
		}

		function criterioMecanicas( criteria) {
	 		return function( item ) {
	 			var motivadorActivo = CartasService.cartaActiva('motivadores');
	 			if(!item.algunMotivadorSeleccionado()) {
	 				return false;	
	 			} 
	 			if (! motivadorActivo ) return item.seleccionado;
	 			for ( var i in item.motivadores) {
					if (item.motivadores[i] === motivadorActivo) {
						return true;
					};
				}
				return false;
			};
		};
	}

})();