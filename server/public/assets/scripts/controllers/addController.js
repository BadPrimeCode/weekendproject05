myApp.controller("addController", ["$scope", "$location", function($scope, $location){
    $scope.add = function () {

    };
    $scope.showAll = function() {
        $location.url('/pets');
    };
  console.log("in add controller");
}]);
