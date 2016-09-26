myApp.controller("addController", ["$scope", "$location", function($scope, $location){
  console.log("in add controller");
    $scope.add = function () {

    };
    $scope.showAll = function() {
        $location.url('/pets');
    };

}]);

$scope.pet = {};
$scope.pets = [];
var getPets = function() {
    return $http.get('/pets').then(function(response){
        if(response.status !== 200){
            throw new Error('Failed to get pets from API');
        }
        $scope.pet = {};
        $scope.pets = response.data;
        return response.data;
    })
};
$scope.add = function(pet){
    return $http.post('/add', pet).then(getPets());
};
getPets();
}]);
