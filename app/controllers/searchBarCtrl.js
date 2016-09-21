'use strict';

app.controller("SearchBarCtrl", function($scope, $http, SearchFactory, $location) {

//API DATA GETTER CONTROLLERS
  // $scope.item;
  $scope.xx = [];

  $scope.runSearchResult = () => {
    $scope.xx.make = $scope.cars.makes[$scope.selectedCarMake].name;
    $scope.xx.model = $scope.cars.makes[$scope.selectedCarMake].models[$scope.selectedCarModel].name;
    $scope.xx.year = $scope.carYears[$scope.selectedCarYear].year;
    $scope.xx.style = $scope.selectedCarStyle;
    console.log("TEST FOR XX", $scope.xx);
    SearchFactory.getSearchResult($scope.xx)
    .then( (searchObj) => {
      $scope.item = searchObj;
      console.log("searchObj", searchObj);
      SearchFactory.addItems(searchObj);
      // console.log("TEST FOR SEARCHOBJ", $scope.item);
      // console.log("TEST FOR SEARCHOBJyear", $scope.item.year.year);
      $location.url("/result");
    });

  };




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



//////////////////////////////////////////////////////////////////////////
//SLIDE PICTURES
//////////////////////////////////////////////////////////////////////////


  $scope.myInterval = 4000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    slides.push({
      text: ['Best Safety Rated Truck of 2016','Most Popular Crossover of 2016','Top Consumer Rated Luxury Vehicle of 2017','Top Consumer Rated Sedan of 2017','Best Expert Chosen Sedan Of 2017', 'Top Consumer Rated Electric Car of 2017', 'Most Fuel Efficient Coupe of 2017'][slides.length % 7],
      image: ['/images/slides/fordRaptor.png','/images/slides/bmwx4.png','/images/slides/porche911.png','/images/slides/acura.jpg', '/images/slides/honda.jpg', '/images/slides/ford.png', '/images/slides/fiat.png'][slides.length % 7],
      id: currIndex++
    });
  }

  for (var i = 0; i < 7; i++) {
    $scope.addSlide();
  }

/////////////

  // Randomize logic below

  // function assignNewIndexesToSlides(indexes) {
  //   for (var i = 0, l = slides.length; i < l; i++) {
  //     slides[i].id = indexes.pop();
  //   }
  // }











});














/// I LOVE CONSOLE LOGS!!!!!   //////









