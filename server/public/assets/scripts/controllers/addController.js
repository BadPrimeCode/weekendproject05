myApp.controller("addController", ["$scope", "$location", function($scope, $location){
  console.log("in add controller");
  $scope.petinfo = false;
  $scope.pet = {};
  $scope.add = function(pet){
          $scope.petinfo = true;
      return $http.post('/add', pet);
      // console.log('added pet');
  };

    $scope.showAll = function() {
        $location.url('/pets');
    };

}]);
