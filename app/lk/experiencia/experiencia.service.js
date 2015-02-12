// btnInclMotivador.service.js
( function() {
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
              var experiencia = {
                     vivencia: vivencia,
                     pensamiento: pensamiento,
                     percepcion: percepcion,
                     voluntad: voluntad,
                     todosRellenos: todosRellenos,
                     mazo: {
                            postIts: postIts,
                            name: name
                     }
              }
              return experiencia;

              function todosRellenos() {
                     var postIts = experiencia.mazo.postIts;
                     for( var i in postIts) {
                            if( !postIts[i] || !postIts[i].nota) {
                                   console.log("1")
                                   return false;
                            }
                            if( postIts[i].nota.replace(',', '').replace(' ','').replace('.','') === '') {
                                   console.log("2")
                                   return false;
                            }
                     }
                     console.log("3")
                     return true;
              }
	};
}) ();