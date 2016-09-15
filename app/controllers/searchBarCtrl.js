'use strict';

app.controller("SearchBarCtrl", function($scope, $http) {

//    $scope.runSearchResult = () => {
//     SearchFactory.getSearchResult($scope.newSearch)
//     .then( (searchObj) => {
//     $scope.item = searchObj;
//     console.log("searchObj", searchObj);
//     })
//     .then((data) => {
//     $location.url("/result");
//     });
// // return data;
//   };

    $scope.selectedCarMake = "";
    $scope.selectedCarModel = "";
    $scope.selectedCarYear = "";
    // $scope.selectedCarModel = [];
    // $scope.selectedCarYear = [];
    $scope.cars = [];
    $scope.carModels = [];
    $scope.carYears = [];



    $http({
            method: 'GET',
            url: '/data/list.json',
        }).success(function (result) {
        $scope.cars = result;
        // console.log("result", result);



    });

        // On change event listener
        $scope.update = function() {
          $scope.carModels = $scope.cars.makes[$scope.selectedCarMake].models;
          console.log("TESTTT", $scope.carModels[$scope.selectedCarMake]);
          $scope.carYears = $scope.carModels[$scope.selectedCarMake].years;
          console.log("SELECTED MAKE", $scope.selectedCarMake);
          console.log("SELECTED MODEL", $scope.selectedCarModel);
          console.log("YEARS", $scope.carYears);
        };







});
