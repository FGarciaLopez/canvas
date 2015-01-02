(function() {
	'use strict';
	angular
		.module('lkCanvas')
		.controller('CanvasController' , canvasController);

	canvasController.$inject = ['CartasService'];
	function canvasController( CartasService) { 
		var canvas = this;
		canvas.activaMazo =  function ( mazo) {
			CartasService.activaMazo(mazo);
		}
	}
})()