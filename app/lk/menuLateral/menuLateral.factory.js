(function() {
	angular
	.module('lkCanvas')
	.factory('MenuLateralFactory', function(){
		var desplegado = false;

		function close() { desplegado = false}
		function toggle() {  desplegado = ! desplegado}
		function isDesplegado() { 
			return desplegado;
		}

		var factory =  {
			close: close,
			toggle: toggle,
			isDesplegado: isDesplegado
		} 
		return factory;
	})
})();