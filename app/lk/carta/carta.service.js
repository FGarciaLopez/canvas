// btnInclMotivador.service.js
( function() {
	'use strict';

	angular
		.module('lkCanvas')
		.factory('CartaService', CartaService);

	function CartaService() {

              return {
                     select: select, // Selecciona un Carta
                     unselect: unselect, // Deselecciona un Carta 
                     isSelected: isSelected,
                     someSelected: someSelected,
                     onOff: onOff
              }

              // Elimina el indicado o el último seleccionado
              function select( mazo, carta) {
                     if(carta)
                            carta.seleccionado = true;
              }

              function unselect( mazo, carta) {
                     if(carta)
                            carta.seleccionado = false;
              }

              function onOff( mazo, carta) {
                     if(carta)
                            carta.seleccionado = ! carta.seleccionado;
              }

              function isSelected( carta) { 
                     return (! carta)? false: carta.seleccionado;
              }

              function someSelected( mazo) {
                     for( var i in mazo.cartas) {
                            if( mazo.cartas[i].seleccionado)
                                   return true
                     }
                     return false
              }

	};
}) ();
