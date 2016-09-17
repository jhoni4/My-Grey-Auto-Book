'use strict';

app.controller("SearchResultCtrl", function($scope, SearchFactory ) {

  $scope.item = SearchFactory.getItems();
  // console.log("ITEM", $scope.item);

  $scope.isCollapsed = true;
  $scope.isCollapsedHorizontal = true;


/////// //ADD TO FB  AND EDIT //////////////////////////////////
/////// //ADD TO FB  AND EDIT //////////////////////////////////

  // we have  $scope.item;


  $scope.newSearch = {
    make: "",
    model: "",
    style: "",
    year: "",
    ratings: {
        performanceScore: "",
        performanceSummary: "",
        comfortScore: "",
        comfortSummary: "",
        interiorScore: "",
        interiorSummary: "",
        valueScore: "",
        valueSummary: "",
        funToDriveScore: "",
        funToDriveSummary: ""
      },
    summary: "",
    cardId: SearchFactory.getCarId()

  };

  $scope.addToFb = (searchObj) => {
    console.log("searchObj", searchObj);
    $scope.newSearch.make = searchObj.make.name;
    $scope.newSearch.model = searchObj.model.name;
    $scope.newSearch.style = searchObj.style.name;
    $scope.newSearch.year = searchObj.year.year;
    $scope.newSearch.ratings.performanceScore = searchObj.ratings[0].score;
    $scope.newSearch.ratings.performanceSummary = searchObj.ratings[0].summary;
    $scope.newSearch.ratings.comfortScore = searchObj.ratings[1].score;
    $scope.newSearch.ratings.comfortSummary = searchObj.ratings[1].summary;
    $scope.newSearch.ratings.interiorScore = searchObj.ratings[2].score;
    $scope.newSearch.ratings.interiorSummary = searchObj.ratings[2].summary;
    $scope.newSearch.ratings.valueScore = searchObj.ratings[3].score;
    $scope.newSearch.ratings.valueSummary = searchObj.ratings[3].summary;
    $scope.newSearch.ratings.funToDriveScore = searchObj.ratings[4].score;
    $scope.newSearch.ratings.funToDriveSummary = searchObj.ratings[4].summary;
    $scope.newSearch.summary = searchObj.summary;
    console.log("newSearch", $scope.newSearch);
    SearchFactory.postSearchToFb($scope.newSearch)
    .then(
      (data) => console.log('search saved!', $scope.newSearch),
      (error) => console.log(error)
    );
  };


    // .then( (searchObj) => {
    //   // console.log("DATA", SearchFactory.getCar());
    //   $scope.item = searchObj;
    //   // console.log("newSearch", searchObj.ratings[0].score);
    //   // console.log("item", $scope.item);

    //   return searchObj;
    // });












});
