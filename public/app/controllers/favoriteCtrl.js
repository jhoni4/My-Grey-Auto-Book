'use strict';

app.controller("FavoriteCtrl", function($scope, SearchFactory)  {
  // $scope.favorites.ratings = [];
  $scope.isCollapsed = true;
  $scope.isCollapsedHorizontal = true;
  $scope.isCollapsedHorizontal1 = true;


  SearchFactory.getFavoriteFromFb()
  .then( (favObj) => {
    $scope.favorites = favObj;
    for (var i = 0; i < favObj.length; i++) {
      $scope.favoriteSource.data.push({label: "", value: ""});
      $scope.favoriteSource.data[i].label = favObj[i].year + favObj[i].make + favObj[i].model;
      $scope.favoriteSource.data[i].value = $scope.calculateAverage(favObj[i].ratings);
    }
  });


 $scope.calculateAverage = function(MyData){
  // console.log("MyData", MyData);
    var sum = 0;
    sum += parseInt(MyData.comfortScore+MyData.funToDriveScore+MyData.interiorScore+MyData.performanceScore+MyData.valueScore, 10); //don't forget to add the base
   // console.log("sum", sum);
    var avg = sum/5;
   // console.log("avg", avg);
    return avg;
 };





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
      // console.log("favObj", favObj);
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

//chart favorite///////////////json
//chart favorite///////////////json

  $scope.favoriteSource = {
    chart: {
      caption: "These are your favorites picks",
      subCaption: "with their overall average rating",
    },
    data:[]
  };







});

