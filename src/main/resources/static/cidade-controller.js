angular.module('cidades').controller('CidadeController', function($scope, $http, $routeParams){

    $scope.cidade = {};
    $scope.mensagem = '';

    $http({
        method: 'GET',
        url: 'http://localhost:8080/cidade/' + $routeParams.idcidade
    }).then(function successCallback(response) {
        console.log(response);
        response.data.dataemancipacao = new Date(response.data.dataemancipacao);// Converte a data para objeto data para não ocorrer ngModel:datefmt
        console.log(response.data.dataemancipacao);
        $scope.cidade = response.data;
    }, function errorCallback(response) {
        console.log(response);
    });


    $scope.submeter = function () {
        if($scope.formulario.$valid){
            if($scope.cidade.id){
                $http.put('http://localhost:8080/cidade/' + $scope.cidade.id, $scope.cidade)
                    .then(function () {
                        $scope.mensagem = "Cidade alterada com sucesso";
                    }, function (err) {
                        $scope.mensagem = "Não foi possivel editar a cidade";
                        console.log(err);
                    })
            }else{
                $http.post('http://localhost:8080/cidade', $scope.cidade).then(function () {
                    $scope.cidade = {};
                    $scope.mensagem = "Cidade cadastrada com sucesso";
                }, function (erro) {
                    $scope.mensagem = "Não foi possivel cadastrar a cidade";
                    console.log(erro);
                })
            }
        }
    }
});