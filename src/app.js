var clientsApp = angular.module("clientsApp",["ngRoute", "firebase", "ui.mask"]);

clientsApp.config(["$routeProvider", function($routeProvider){
  $routeProvider
    .otherwise({
      redirectTo: "/clients"
    })
    .when("/clients",{
      templateUrl: "src/partials/clients.html",
      controller: "clientsCtrl",
    })
    .when("/add-clients",{
      templateUrl: "src/partials/add-clients.html",
      controller: "addClientsCtrl"
    })
    .when("/clients/:id",{
      templateUrl: "src/partials/edit-clients.html",
      controller: "editClientsCtrl"
    })
}]);