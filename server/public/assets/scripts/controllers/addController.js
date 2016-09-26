myApp.controller("addController", ["$scope", "$location", function($scope, $location){
  console.log("in add controller");

  $scope.pet = {};
  $scope.add = function(pet){
      return $http.post('/add', pet);
      console.log('post add pet');
  };

    $scope.showAll = function() {
        $location.url('/pets');
    };

}]);
