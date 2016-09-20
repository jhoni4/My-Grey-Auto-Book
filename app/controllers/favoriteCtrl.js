'use strict';

app.controller("FavoriteCtrl", function($scope, SearchFactory)  {
  // $scope.favorites.ratings = [];
  $scope.isCollapsed = true;
  $scope.isCollapsedHorizontal = true;


  SearchFactory.getFavoriteFromFb()
  .then( (favObj) => {
    $scope.favorites = favObj;
    $scope.favorites.ratings = favObj.ratings;
    $scope.favoriteSource.data[0].label = favObj[0].year + favObj[0].make + favObj[0].model;
    $scope.favoriteSource.data[1].label = favObj[1].year + favObj[1].make + favObj[1].model;
    $scope.favoriteSource.data[2].label = favObj[2].year + favObj[2].make + favObj[2].model;
    $scope.favoriteSource.data[3].label = favObj[3].year + favObj[3].make + favObj[3].model;
    $scope.favoriteSource.data[4].label = favObj[4].year + favObj[4].make + favObj[4].model;
    $scope.favoriteSource.data[0].value = $scope.calculateAverage(favObj[0].ratings);
    $scope.favoriteSource.data[1].value = $scope.calculateAverage(favObj[1].ratings);
    $scope.favoriteSource.data[2].value = $scope.calculateAverage(favObj[2].ratings);
    $scope.favoriteSource.data[3].value = $scope.calculateAverage(favObj[3].ratings);
    $scope.favoriteSource.data[4].value = $scope.calculateAverage(favObj[4].ratings);
  });

$scope.calculateAverage = function(MyData){
  console.log("MyData", MyData);
    var sum = 0;
    sum += parseInt(MyData.comfortScore+MyData.funToDriveScore+MyData.interiorScore+MyData.performanceScore+MyData.valueScore, 10); //don't forget to add the base }
   console.log("sum", sum);
    var avg = sum/5;
   console.log("avg", avg);

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

//chart favorite///////////////json

$scope.favoriteSource = {
        chart: {
            caption: "These are your favorites picks",
            subCaption: "with their overall average rating",
        },
        data:[{
            label: "",
            value: ""
        },
        {
            label: "",
            value: ""
        },
        {
            label: "",
            value: ""
        },
        {
            label: "",
            value: ""
        },
        {
            label: "",
            value: ""
        }]
      };








});

