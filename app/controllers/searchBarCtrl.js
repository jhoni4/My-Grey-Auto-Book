'use strict';

app.controller("SearchBarCtrl", function($scope, $http, SearchFactory, $location) {

  $scope.xx = [];
  // $scope.pp = [];



//API DATA GETTER CONTROLLERS///////////
//API DATA GETTER CONTROLLERS///////////
//API DATA GETTER CONTROLLERS///////////

  $scope.runSearchResult = () => {
    $scope.xx.make = $scope.cars.makes[$scope.selectedCarMake].name;
    $scope.xx.model = $scope.cars.makes[$scope.selectedCarMake].models[$scope.selectedCarModel].name;
    $scope.xx.year = $scope.carYears[$scope.selectedCarYear].year;
    $scope.xx.style = $scope.selectedCarStyle;
    // console.log("TEST FOR XX", $scope.xx);
    SearchFactory.getSearchResult($scope.xx)
    .then( (searchObj) => {
      $scope.item = searchObj;
      SearchFactory.addItems(searchObj);
      // $scope.getPhoto($scope.xx);
      $location.url("/result");
    });

  };
  // $scope.getPhoto = () => {
  //   console.log("$scope.XXXX", $scope.xx);
  //   SearchFactory.getPicture($scope.xx)
  //   .then( (imgSearch) => {
  //     console.log("imgSearch", imgSearch);
  //     $scope.pic = imgSearch;
  //     SearchFactory.addPics(imgSearch);
  //     console.log("TEST FOR PIC", $scope.pic);
  //   });
  // };


// DROP DROWN CONTROLLERS////////////////////////////////////////////
// DROP DROWN CONTROLLERS////////////////////////////////////////////
// DROP DROWN CONTROLLERS////////////////////////////////////////////

  $scope.selectedCarMake = "";
  $scope.selectedCarModel = "";
  $scope.selectedCarYear = "";
  $scope.selectedCarStyle = "";

//list of drop downs////

  $scope.cars = [];
  $scope.carModels = [];
  $scope.carYears = [];
  $scope.carstyles = ["Sedan", "Coupe", "Suv", "Truck"];

  $http({
    method: 'GET',
    url: '/data/list2.json',
  }).success(function (result) {
    $scope.cars = result;
      // console.log("result", result);
  });






// ON CHANGE drop down  EVENT LISTENER/////////
// ON CHANGE drop down  EVENT LISTENER/////////

  $scope.update = function() {
    $scope.carModels = $scope.cars.makes[$scope.selectedCarMake].models;
  };
  $scope.update2 = function() {
    $scope.carYears = $scope.carModels[$scope.selectedCarModel].years;
  };



//////////////////////////////////////////////////////////////////////////
//SLIDE PICTURES////////////////////////////////////////////////////////
//SLIDE PICTURES////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


  $scope.myInterval = 3000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    slides.push({
      text: ['Best Safety Rated Truck of 2016','Top Consumer Rated Crossover of 2016','Top Consumer Rated Luxury Vehicle of 2017','Top Consumer Rated Sedan of 2017','Best Expert Chosen Sedan Of 2017', 'Top Consumer Rated Electric Car of 2017', 'Most Fuel Efficient Coupe of 2017', 'Best Luxury Car Under $35,000'][slides.length % 8],
      image: ['/images/slides/fordRaptor.png','/images/slides/bmwx4.png','/images/slides/porche911.png','/images/slides/acura.png', '/images/slides/honda.jpg', '/images/slides/ford.png', '/images/slides/fiat.png', '/images/slides/lexus.png'][slides.length % 8],
      id: currIndex++
    });
  }
  for (var i = 0; i < 8; i++) {
    $scope.addSlide();
  }

/////////////










});














/// I LOVE CONSOLE LOGS!!!!!   //////









