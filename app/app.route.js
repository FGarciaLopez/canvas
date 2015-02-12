(function () {
  angular
        .module('lkCanvas')
        .config( [ '$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/canvas', {
                    templateUrl: '/lk/canvas/canvas.html',
                    controller: 'CanvasController',
                    controllerAs: 'canvas'
                })
                .when('/objetivos', {
                    templateUrl: '/lk/objetivos/objetivos.html',
                    controller: 'ObjetivosController',
                    controllerAs: 'objs'
                })
                .when('/experiencia', {
                    templateUrl: '/lk/experiencia/experiencia.html',
                    controller: 'ExperienciaController',
                    controllerAs: 'exp'
                })
                .when('/comportamientos', {
                    templateUrl: '/lk/comportamientos/comportamientos.html',
                    controller: 'ComportamientosController',
                    controllerAs: 'cmps'
                })
                .when('/disparadores', {
                    templateUrl: '/lk/disparadores/disparadores.html',
                    controller: 'DisparadoresController',
                    controllerAs: 'dis'
                })
                .when('/motivadores', {
                    templateUrl: '/lk/motivadores/motivadores.html',
                    controller: 'MotivadoresController',
                    controllerAs: 'mots'
                })
                .when('/mecanicas', {
                    templateUrl: '/lk/mecanicas/mecanicas.html',
                    controller: 'MecanicasController',
                    controllerAs: 'mecs'
                })
                .when('/componentes', {
                    templateUrl: '/lk/componentes/componentes.html',
                    controller: 'ComponentesController',
                    controllerAs: 'coms'
                })
        }])

})();
