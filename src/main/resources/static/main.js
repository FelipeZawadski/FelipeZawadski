angular.module('cidades',['ngRoute'])
    .config(function($routeProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $routeProvider.when('/cidades',{
            templateUrl: 'principal.html' ,
            controller: 'CidadesController'
        });

        $routeProvider.when('/cidades/new',{
            templateUrl: 'cidade.html',
            controller: 'CidadeController'
        });

        $routeProvider.when('/cidades/:idcidade',{
            templateUrl: 'cidade.html',
            controller: 'CidadeController'
        });

        $routeProvider.otherwise({redirectTo: 'cidades'});
});