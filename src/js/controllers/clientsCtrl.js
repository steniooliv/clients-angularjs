angular.module("clientsApp")
  .controller("clientsCtrl", function ($scope, $firebaseArray) {
    var ref = firebase.database().ref("clients");
    $scope.clients = $firebaseArray(ref);

    $scope.deleteClient = function (client) {
      var result = confirm("Deseja remover?");
      if (result) {
        $scope.clients
          .$remove(client)
          .then(function () {
            window.location.assign('#!/clients');
          }, function (error) {
            console.log(error);
          });
      }
    }
  });