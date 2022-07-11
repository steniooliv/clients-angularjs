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

    $scope.formatPhone = function (phone) {
      if (!phone) {
        return "";
      }

      var location = phone.slice(0, 2);
      var number = phone.slice(2);

      var p1;
      var p2;

      if (number.length == 8) {
        p1 = number.slice(0, 4);
        p2 = number.slice(4);
      } else {
        p1 = number.slice(0, 5);
        p2 = number.slice(5);
      }

      return `(${location}) ${p1}-${p2}`;

    }
  });