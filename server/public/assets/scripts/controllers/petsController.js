myApp.controller('petsController', ['$scope', '$http', function($scope, $http){
  console.log('in pets controller');
   $scope.pets = [];
    $scope.getPets = function() {
        $http({
          method: 'GET',
          url: '/pets'
        }).then(function success(res){
           if(res.status !== 200){
               console.log ('failed to get pets. sad!');
           }
           $scope.pets = res.data;
           return res.data;
       });
   };
}]);
