'use strict';

app.controller("FavoriteCtrl", function($scope, SearchFactory)  {
  $scope.isCollapsed = true;
  $scope.isCollapsedHorizontal = true;
  $scope.isCollapsedHorizontal1 = true;


/////SAVED CARS GETTER//////
/////SAVED CARS GETTER//////
/////SAVED CARS GETTER//////

  SearchFactory.getFavoriteFromFb()
  .then( (favObj) => {
    $scope.favorites = favObj;
    for (var i = 0; i < favObj.length; i++) {
      $scope.favoriteSource.data.push({label: "", value: ""});
      $scope.favoriteSource.data[i].label = favObj[i].year + favObj[i].make + favObj[i].model;
      $scope.favoriteSource.data[i].value = $scope.calculateAverage(favObj[i].ratings);
    }
  });


/////AVERAGE SCORE POINT CALCULATOR////////
/////AVERAGE SCORE POINT CALCULATOR////////
/////AVERAGE SCORE POINT CALCULATOR////////

 $scope.calculateAverage = function(MyData){
    var sum = 0;
    sum += parseInt(MyData.comfortScore+MyData.funToDriveScore+MyData.interiorScore+MyData.performanceScore+MyData.valueScore, 10); //don't forget to add the base
    var avg = sum/5;
    return avg;
 };



/////DELETE A CAR///////
/////DELETE A CAR///////
/////DELETE A CAR///////

  $scope.deleteCar = (carId) => {
    console.log("carId", carId);
    SearchFactory.deleteFavFromFirebase(carId)
    .then( (response) => {
      SearchFactory.getFavoriteFromFb()
      .then( (favObj) => {
        $scope.favorites = favObj;
        $scope.favorites.ratings = favObj.ratings;
      });
    });

  };

  $scope.editedCar = {};


////COMMENT SAVE BUTTON///////
////COMMENT SAVE BUTTON///////
////COMMENT SAVE BUTTON///////

  $scope.saveComment = (carId, editedCar) => {
     SearchFactory.getSingleCarFromFb(carId)
     .then( (favObj) => {
      favObj.comment = $scope.editedCar.comment;
      $scope.editedCar = favObj;
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

