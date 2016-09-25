var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
      when("/home", {
        templateUrl: "/views/partials/home.html",
        controller: "homeController"
      }).
      when("/add", {
        templateUrl: "/views/partials/add.html",
        controller: "addController"
      }).
      when("/pets", {
        templateUrl: "/views/partials/pets.html",
        controller: "petsController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);

// =======================================
//
// var app = angular.module('myApp', []);
// app.controller("IndexController", ['$scope', '$http', function($scope, $http){
//    $scope.pet = {};
//    $scope.pets = [];
//    var getPets = function() {
//        return $http.get('/pets').then(function(response){
//            if(response.status !== 200){
//                throw new Error('Failed to get pets from API');
//            }
//            $scope.pet = {};
//            $scope.pets = response.data;
//            return response.data;
//        })
//    };
//    $scope.add = function(pet){
//        return $http.post('/add', pet).then(getPets());
//    };
//    getPets();
// }]);
