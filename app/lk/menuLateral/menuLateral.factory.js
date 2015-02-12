(function() {
	angular
	.module('lkCanvas')
	.factory('MenuLateralFactory', function(){

		function MenuDesplegable( desplegado) {
			this.desplegado = desplegado || false;
		} 
		var factory =  new MenuDesplegable( false);
		factory.close = function() { factory.desplegado = false}
		factory.toogle = function() { factory.desplegado = ! factory.desplegado}
		return factory;
	})
})();