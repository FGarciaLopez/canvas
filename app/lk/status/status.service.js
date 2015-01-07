(function() {
    'use strict';

    angular
        .module('lkCanvas')
        .factory('StatusService', StatusService);

	StatusService.$injector = ['$location', '$rootScope', '$injector']    
    function StatusService ($location, $rootScope, $injector) {
    	var activadoModoSeleccion = false;
        var seccionesConCartas = ['/disparadores', '/motivadores', '/mecanicas', '/componentes'];
        var modoSeleccion= false;
        var service = {
            activarModoSeleccion: activarModoSeleccion,
            cambiarAApartado: cambiarAApartado,
            cambiarModoSeleccion: cambiarModoSeleccion,
            estaActivadoModoSeleccion: estaActivadoModoSeleccion,
            estaEnModoSeleccion: estaEnModoSeleccion
        };

        // Cuando ha cambiado la ruta, activa o no el modo selección (solo para seccciones con cartas)
        $rootScope.$on('$locationChangeSuccess', function(event, next, current) {
             activadoModoSeleccion = (seccionesConCartas.indexOf($location.path()) >= 0);
             modoSeleccion = false;
        })

        return service;

        function activarModoSeleccion( valor) {
            activarModoSeleccion = (typeof valor === 'undefined')? true: valor;
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

        function cambiarModoSeleccion() {
        	modoSeleccion = ! modoSeleccion;
            console.log('cambio modo a ', modoSeleccion)
        	return modoSeleccion;
        }

        function estaActivadoModoSeleccion() { return activadoModoSeleccion }

        function estaEnModoSeleccion() { return modoSeleccion }


    }
})();