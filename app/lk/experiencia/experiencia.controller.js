(function() {
	'use strict';
	angular
		.module('lkCanvas')
		.controller('ExperienciaController' , ExperienciaController);

	ExperienciaController.$inject = ['ExperienciaService', 'PostItService'];
	function ExperienciaController( ExperienciaService, PostItService) { 
		var exp = this;
		exp.mazo = ExperienciaService.mazo;
	}

})()