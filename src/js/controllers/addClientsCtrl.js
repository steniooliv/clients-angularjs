angular.module("clientsApp")
  .controller("addClientsCtrl", function ($scope, $firebaseArray, $http) {
    $scope.addClient = function () {
      var ref = firebase.database().ref("clients");

      $firebaseArray(ref).$add($scope.client)
        .then(function () {
          $scope.client.name = ""
          $scope.client.email = ""
          $scope.client.phone = ""
          $scope.client.cep = ""
          $scope.client.address = ""
          $scope.client.number = ""
          $scope.client.complement = ""
          $scope.client.neighborhood = ""
          $scope.client.city = ""
          $scope.client.state = ""
          window.location.assign('#!/clients');
        }, function (error) {
          console.log(error);
        });
    }

    $scope.buscarCep = function (cep) {
      var validaCep = /^[0-9]{5}[-]?[0-9]{3}$/.test(cep);
      if (validaCep) {
        $http.get("https://viacep.com.br/ws/" + cep + "/json/").then(
          function (response) {
            var endereco = response.data;
            $scope.client.address = endereco.logradouro;
            $scope.client.neighborhood = endereco.bairro;
            $scope.client.city = endereco.localidade;
            $scope.client.state = endereco.uf;
          },
          function (error) {
            if (error.status === 404) {
              alert('Cep não encontrado');
            }
          }
        );
      } else {
        alert("O CEP digitado é inválido!");
      }
    }
  });