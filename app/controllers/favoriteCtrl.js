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

 $scope.addComment = (carId) => {

 };



});
