myApp.controller("petsController", ['$scope', '$http', function($scope, $http){
  console.log("in pets controller");
   $scope.pets = [];
   var getPets = function() {
       return $http.get('/pets').then(function(response){
           if(response.status !== 200){
               throw new Error('Failed to get pets from API');
           }
           $scope.pets = response.data;
           return response.data;
       })
   };
}]);
