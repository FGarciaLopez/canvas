// btnInclMotivador.service.js
( function() {
	'use strict';

	angular
		.module('lkCanvas')
		.factory('CartasService', cartasService);

	function cartasService() {

              var seleccionActivada = {}; // En cada mazo indica si se ha activado la seleccion
              var cartasActivas = {}; // En cada mazo indica qué carta está activa
              var mazoActivo = false; // Con qué mazo de cartas se está trabajando

              return {
                     activaSeleccion: activaSeleccion,
                     desactivaSeleccion: desactivaSeleccion,
                     esSeleccionActivada: esSeleccionActivada,
                     inclCarta: inclCarta,
                     esCartaIncl: esCartaIncl,
                     exclCarta: exclCarta,
                     activaCarta: activaCarta,
                     desactivaCarta: desactivaCarta,
                     cartaActiva: cartaActiva,
                     estaActivaCarta: estaActivaCarta,
                     activaMazo: activaMazo,
                     desactivaMazo: desactivaMazo
              }

              function activaSeleccion ( mazo, siNo) { 
              	siNo = (typeof siNo === 'undefined')? true: siNo;
              	seleccionActivada[ mazo] = siNo;
              }

              function desactivaSeleccion( mazo) { seleccionActivada[ mazo] = false }

              function esSeleccionActivada( mazo) { return seleccionActivada[mazo] }

              function inclCarta( carta, valor) {
              	valor = (typeof valor === 'undefined') ? true: valor;
              	carta.seleccionado = valor;
              }
              function esCartaIncl( carta) { return carta.seleccionado }

              function exclCarta( carta) { inclCarta(carta, false) }

              function activaCarta( mazo, carta) {
              	if( typeof carta === 'undefined') return;
                     desactivaCarta(mazo);
                     carta.activo = true;
                     cartasActivas[mazo] = carta;
              }

              function desactivaCarta( mazo) { 
                     if (typeof mazo === 'undefined') return;
                     if( cartasActivas[mazo]) {
                            cartasActivas[mazo].activo = false;
                     }
                     cartasActivas[mazo] = false;
              }

              function cartaActiva( mazo) { 
                     return cartasActivas[mazo] 
              }

              function estaActivaCarta( mazo, carta) {
                     if (cartasActivas[mazo] != carta) return false;
                     return cartasActivas[mazo]
              }

              function activaMazo( mazo) {
                     if (typeof mazo != 'undefined') {
                            mazoActivo = mazo;
                     }
                     return mazoActivo;
              }
   	   
              function desactivaMazo( ) { activaMazo( false) }
	};
}) ();
