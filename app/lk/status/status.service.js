(function() {
    'use strict';

    angular
        .module('lkCanvas')
        .factory('StatusService', StatusService);

	StatusService.$injector = ['$location', '$injector']    
    function StatusService ($location, $injector) {
    	var activadoModoSeleccion = false;
        var modoSeleccion= false;
        var service = {
            seccionesConCartas: ['/disparadores', '/motivadores', '/mecanicas', '/componentes'],
            activarModoSeleccion: activarModoSeleccion,
            cambiarAApartado: cambiarAApartado,
            cambiarModoSeleccion: cambiarModoSeleccion,
            estaActivadoModoSeleccion: estaActivadoModoSeleccion,
            estaEnModoSeleccion: estaEnModoSeleccion
        };

        return service;

        function activarModoSeleccion( valor) {
            activadoModoSeleccion = (typeof valor === 'undefined')? true: valor;
            modoSeleccion = false;
        }

        function cambiarAApartado( id) {
            var url = $location.url();
            if( url.indexOf( id) < 0) {
                if( url.lastIndexOf('#') > 0)
                    url = url.substring(0, url.lastIndexOf('#'));
                $location.url(url+id);
            }
        }

        function cambiarModoSeleccion( valor) {
            var valor = (typeof valor === 'undefined')? ! modoSeleccion: valor;
        	modoSeleccion = valor;
        	return modoSeleccion;
        }

        function estaActivadoModoSeleccion() { return activadoModoSeleccion }

        function estaEnModoSeleccion() { return modoSeleccion }


    }
})();