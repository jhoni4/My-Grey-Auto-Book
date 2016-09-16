'use strict';

app.controller("FavoriteCtrl", function($scope, SearchFactory)  {
  // $scope.favorites.ratings = [];
  SearchFactory.getFavoriteFromFb()
  .then( (favObj) => {
    $scope.favorites = favObj;
    $scope.favorites.ratings = favObj.ratings;
    console.log("$scope.favorites", $scope.favorites);
    // console.log("favorites", favorites);
  });


});
