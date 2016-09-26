myApp.controller('petsController', ['$scope', '$http', function($scope, $http){
  console.log('in pets controller');
   $scope.pets = [];
   var getPets = function() {
       return $http.get('/pets').then(function(res){
           if(res.status !== 200){
               throw new Error('Failed to get pets from API');
           }
           $scope.pets = res.data;
           return res.data;
       });
   };
   getPets();
}]);
