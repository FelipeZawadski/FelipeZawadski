angular.module('cidades').controller('CidadesController', function($scope, $http){

    $scope.cidades = [];

    var url = 'http://localhost:8080/cidade'

    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        console.log(response);
        $scope.cidades = response.data;
    }, function errorCallback(response) {
        console.log(response);
    });

    $scope.remover = function (cidade) {
        $http.delete('http://localhost:8080/cidade/' + cidade.idcidade)
        .then(function(){
            var indicecidade = $scope.cidades.indexOf(cidade);
            $scope.cidades.splice(indicecidade, 1);
            console.log("Cidade Excluida")
        }, function (erro) {
            console.log(erro);
        })
    }
});
