// btnInclMotivador.service.js
( function() {
	'use strict';

	angular
		.module('lkCanvas')
		.factory('ExperienciaService', ExperienciaService);

       ExperienciaService.$injector = ['PostItService']
	function ExperienciaService( PostItService) {

              var vivencia = new PostItService.PostIt('');
              var pensamiento = new PostItService.PostIt('');
              var percepcion = new PostItService.PostIt('');
              var voluntad = new PostItService.PostIt('');
              var postIts = [ vivencia, pensamiento, percepcion, voluntad];
              var name = "experiencia";

              return {
                     vivencia: vivencia,
                     pensamiento: pensamiento,
                     percepcion: percepcion,
                     voluntad: voluntad,
                     mazo: {
                            postIts: postIts,
                            name: name
                     }
              }
	};
}) ();
