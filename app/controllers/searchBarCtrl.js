'use strict';

app.controller("SearchBarCtrl", function($scope, $http, SearchFactory) {

//API DATA GETTER CONTROLLERS
  $scope.item = [];
  $scope.xx = [];

  $scope.runSearchResult = () => {
    console.log("TEST FOR MAKE", $scope.cars.makes[$scope.selectedCarMake].name);
    $scope.xx.make = $scope.cars.makes[$scope.selectedCarMake].name;

    console.log("TEST FOR MODEL", $scope.cars.makes[$scope.selectedCarMake].models[$scope.selectedCarModel].name);
    $scope.xx.model = $scope.cars.makes[$scope.selectedCarMake].models[$scope.selectedCarModel].name;

    // console.log("TEST FOR YEAR", $scope.cars.makes[$scope.selectedCarMake].models[$scope.selectedCarModel].years[$scope.selectedCarYear]);
    // console.log("YEARRRR", $scope.cars.makes[$scope.cars.makes]);

    console.log("TEST FOR #YEAR", $scope.selectedCarYear);
    $scope.xx.year = $scope.carYears[$scope.selectedCarYear].year;

    // console.log("TEST FOR #STYLE", $scope.selectedCarStyle);
    // console.log("TEST FOR #STYLE", selectedCarStyle);
    $scope.xx.style = $scope.selectedCarStyle;

    console.log("TEST FOR XX", $scope.xx);
    SearchFactory.getSearchResult($scope.xx)
    .then( (searchObj) => {
      $scope.item = searchObj;
      console.log("TEST FOR SEARCHOBJ", searchObj);
    })
    .then((data) => {
      console.log("so far so good");
      // $location.url("/result");
    });
  // return data;
  };




// DROP DROWN CONTROLLERS/////////////////////////////////



  $scope.selectedCarMake = "";
  $scope.selectedCarModel = "";
  $scope.selectedCarYear = "";
  $scope.selectedCarStyle = "";

  $scope.cars = [];
  $scope.carModels = [];
  $scope.carYears = [];
  $scope.carstyles = ["Sedan", "Suv", "Truck"];

  $http({
    method: 'GET',
    url: '/data/list.json',
  }).success(function (result) {
    $scope.cars = result;
      // console.log("result", result);
  });


// ON CHANGE drop down  EVENT LISTENER
  $scope.update = function() {
    $scope.carModels = $scope.cars.makes[$scope.selectedCarMake].models;
  };
  $scope.update2 = function() {
    $scope.carYears = $scope.carModels[$scope.selectedCarModel].years;
  };



/// I LOVE CONSOLE LOGS!!!!!   //////

    // console.log("TTTTTTZZZZZZ", $scope.selectedCarModel);
    // console.log("$scope.carModels[$scope.selectedCarModel].years", $scope.carModels[$scope.selectedCarModel].years);
    // console.log("Test running", $scope.carModels);
    // console.log("Test running", $scope.cars.makes[$scope.selectedCarMake].name);
    // console.log("TESTTT", $scope.carModels[$scope.selectedCarMake]);
    // $scope.carYears = $scope.carModels[$scope.selectedCarMake].models[$scope.selectedCarModel].years;
    // console.log("SELECTED MAKE", $scope.selectedCarMake);
    // console.log("SELECTED MODEL", $scope.selectedCarModel);
    // console.log("YEARS", $scope.carYears.years);
    // console.log("YEARS ", $scope.selectedCarYear);







});
