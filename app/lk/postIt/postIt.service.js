// btnInclMotivador.service.js
( function() {
	'use strict';

	angular
		.module('lkCanvas')
		.factory('PostItService', PostItService);

	function PostItService() {

              return {
                     PostIt: PostIt,
                     crear: crear, 
                     editar: editar,
                     eliminar: eliminar,
                     guardar: guardar,
                     cancelar: cancelar,
                     select: select, // Selecciona un Post-it
                     unselect: unselect, // Deselecciona un Post-it 
                     selected: selected, // Ultimo Post-it que se ha seleccionado 
                     isSelected: isSelected,
                     haySeleccionado: haySeleccionado
              }

              function PostIt( nota) {
                     this.nota = nota || '';
                     this.seleccionado = false;
                     this.isEmpty = function () { return this.nota == '' }
                     this.isValid = function () { return !empty() }
              }

              function crear( pila) {
                     var postIt = new PostIt('');
                     unselect( pila); // Cuando se guarde, lo añadirá a la pila
                     return postIt;
              }

              function editar( pila, postIt) {
                     if(haySeleccionado(pila)) return false; // Impide que edite uno, cuando está editando otro
                     var copia = new PostIt(postIt.nota); // Crea una copia
                     select( pila, postIt); // Cundo guarde, actualizará el seleccionado 
                     return copia
              }

              // Elimina el indicado o el último seleccionado
              function eliminar( pila, postIt) {
                     if(!postIt) {
                            postIt = selected( pila);
                     }
                     var index = pila.postIts.indexOf( postIt);
                     if (index > -1) {
                         pila.postIts.splice(index, 1);
                     }                     
                     
              }

              function guardar( pila, postIt) {
                     if( ! selected( pila)) { // Es uno nuevo ?
                            add(pila, postIt);
                            return false;
                     } else {
                            selected( pila).nota = postIt.nota;
                            postIt.seleccionado = false;
                            unselect( pila);
                            return false;
                     }

              }

              function cancelar( pila) {
                     unselect( pila);
                     return false;
              }

              function add( pila, postIt) {
                     pila.postIts.push(postIt);
                     return postIt;
              }


              function select( pila, postIt, exclusive) {
              	if( typeof postIt === 'undefined') return;
                     if( exclusive) unselectPostIt(pila);
                     postIt.seleccionado = true;
                     pila.seleccionado = postIt;
              }

              function unselect( pila, postIt) { 
                     if (typeof pila === 'undefined') return;
                     if( !postIt) {
                            for( var i in pila.postIts) {
                                   pila.postIts[i].seleccionado = false;
                            }
                     } else {
                            postIt.seleccionado = false;
                     }
                     pila.seleccionado = false;
              }

              function selected( pila) { 
                     return pila.seleccionado;
              }

              function isSelected( postIt) { 
                     return (! postIt)? false: postIt.seleccionado;
              }

              function haySeleccionado( pila) {
                     return (selected( pila))? true: false
              }

	};
}) ();
