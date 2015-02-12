(function() {
    angular
        .module('lkCanvas')
        .factory('StatusService', StatusService);

	StatusService.$injector = ['$location']    
    function StatusService ($location) {
        function Paso( nombre, path, siguiente) {
            this.path = path;
            this.nombre = nombre,
            this.siguiente = siguiente,
            this.anterior = this;
        }
        var pasos = [];
        pasos.push( new Paso( 'Tablero', '/canvas', 'Experiencia'));
        pasos.push( new Paso( 'Experiencia', '/experiencia', 'Objetivos'));
        pasos.push( new Paso( 'Objetivos', '/objetivos', 'Disparadores'));
        pasos.push( new Paso( 'Disparadores', '/disparadores', 'Comportamientos'));
        pasos.push( new Paso( 'Comportamientos', '/comportamientos', 'Motivadores'));
        pasos.push( new Paso( 'Motivadores', '/motivadores', 'Mecánicas'));
        pasos.push( new Paso( 'Mecánicas', '/mecanicas', 'Componentes'));
        pasos.push( new Paso( 'Componentes', '/componentes','Tablero'));

        for( var i in pasos) {
            for( var j in pasos) {
                if( pasos[i].nombre === pasos[j].siguiente) {
                    pasos[j].siguiente = pasos[i];
                    pasos[i].anterior = pasos[j];
                    break;
                }
            }
        }

        var paso = pasos[0];
    	var activadoModoSeleccion = false;
        var modoSeleccion= false;
        var service = {
            activarModoSeleccion: activarModoSeleccion,
            cambiarAApartado: cambiarAApartado,
            cambiarModoSeleccion: cambiarModoSeleccion,
            cambiarPaso: cambiarPaso,
            estaActivadoModoSeleccion: estaActivadoModoSeleccion,
            estaEnModoSeleccion: estaEnModoSeleccion,
            pasoActual: pasoActual,
            pasoAnterior: pasoAnterior,
            pasoSiguiente: pasoSiguiente,
            seccionesConCartas: ['/disparadores', '/motivadores', '/mecanicas', '/componentes']
        };

        return service;

        function pasoActual() {
            return paso.nombre;
        }

        function pasoSiguiente() {
            return paso.siguiente.nombre;
        }

        function pasoAnterior() {
            return paso.anterior.nombre;
        }

        function cambiarPaso( siguiente) {
            console.log("voy a: ", siguiente);
            if( typeof siguiente === 'string') {
                for( var i in pasos) {
                    if( pasos[i].nombre === siguiente) {
                        paso = pasos[i];
                        break;
                    }
                }
            } else if( typeof siguiente === 'Object') {
                paso = siguiente;
            } else {
                paso = paso.siguiente;
            }
            $location.url(paso.path);
        }

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