'use strict';

app.controller("FavoriteCtrl", function($scope, SearchFactory)  {
  // $scope.favorites.ratings = [];
  $scope.isCollapsed = true;
  $scope.isCollapsedHorizontal = true;


  SearchFactory.getFavoriteFromFb()
  .then( (favObj) => {
    $scope.favorites = favObj;
    $scope.favorites.ratings = favObj.ratings;
    // console.log("$scope.favorites", $scope.favorites);
    // console.log("favorites", favorites);
  });

 $scope.deleteCar = (carId) => {
  console.log("carId", carId);
  // console.log("carId", carId);
  SearchFactory.deleteFavFromFirebase(carId)
  .then( (response) => {
    SearchFactory.getFavoriteFromFb()
    .then( (favObj) => {
      $scope.favorites = favObj;
      $scope.favorites.ratings = favObj.ratings;
      // console.log("favorites", favorites);
    });
  });

};

  $scope.editedCar = {};

  $scope.saveComment = (carId, editedCar) => {
    // $scope.isCollapsedHorizontal = true;
      // console.log("carId", carId);
      // console.log("$scope.editedCar", $scope.editedCar);
      // console.log("$scope.editedCar.comment", $scope.editedCar.comment);
     SearchFactory.getSingleCarFromFb(carId)
     .then( (favObj) => {
      console.log("favObj", favObj);
      favObj.comment = $scope.editedCar.comment;
      $scope.editedCar = favObj;
    // console.log("favObj.comment", favObj.comment);
    // console.log("$scope.editedCar", $scope.editedCar);
    SearchFactory.updateCar(carId, $scope.editedCar)
    .then( (data) => {
      SearchFactory.getFavoriteFromFb()
      .then( (favObj) => {
        $scope.favorites = favObj;
        $scope.favorites.ratings = favObj.ratings;
      });
    });

    });
  };










});

