// disparadores.value.js
(function() {
	angular
		.module('lkCanvas')
		.value( 'Objetivos', new Objetivos());

	function Objetivos() {
		this.postIts = [];
		this.name = "objetivos";
	}
})();	