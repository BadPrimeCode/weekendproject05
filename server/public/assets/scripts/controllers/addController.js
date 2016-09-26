myApp.controller('addController', ['$scope', '$http', function($scope, $http){
  console.log('in add controller');
  $scope.petinfo = false;
  $scope.pet = {};
  $scope.addPet = function(nameInput, animalInput, ageInput, imageInput){

    var newPet = new Pet({
      name: nameInput,
      animal: animalInput,
      age: ageInput,
      image_url: imageInput
    });

    $http({
      method: 'POST',
      url: '/add',
      data: newPet
    }).then(function success(req){
        console.log('added pet: ', newPet);
       if(req.status !== 200){
           console.log ('failed to add pet. sad!');
       }else{
       $scope.pets = req.data;
       return req.data;
     }
   });
          $scope.petinfo = true;

  };

    $scope.showAll = function() {
        $location.url('/pets');
    };

}]);
