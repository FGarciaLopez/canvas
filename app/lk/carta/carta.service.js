// btnInclMotivador.service.js
( function() {
	'use strict';

	angular
		.module('lkCanvas')
		.factory('CartaService', CartaService);

	function CartaService() {

              var carta = {
                     isSelected: isSelected,
                     someSelected: someSelected,
                     onOff: onOff,
                     getImage: getImage
              };
              return carta

              function getImage(mazo, carta) {
                     var imagen = '/img/' + mazo.imagen+'/'+carta.imagen
                     if( !carta.seleccionado)
                            imagen = imagen + '-bw'
                     return imagen+ '.svg';
              }

              function onOff( mazo, carta) {
                     if(carta) carta.seleccionado = ! carta.seleccionado;
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
