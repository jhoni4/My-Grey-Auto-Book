'use strict';

app.controller("SearchResultCtrl", function($scope, SearchFactory ) {

     $scope.item = SearchFactory.getItems();
      console.log("ITEM", $scope.item);

 $scope.isCollapsed = true;
  $scope.isCollapsedHorizontal = true;


/////// //ADD TO FB  AND EDIT //////////////////////////////////
/////// //ADD TO FB  AND EDIT //////////////////////////////////

  // $scope.item;
  // $scope.newSearch = {
  //   make: "",
  //   model: "",
  //   style: "",
  //   year: "",
  //   ratings: [
  //     {performanceScore: "", performanceSummary: ""},
  //     {comfortScore: "", comfortSummary: ""},
  //     {interiorScore: "", interiorSummary: ""},
  //     {valueScore: "", valueSummary: ""},
  //     {funToDriveScore: "", funToDriveSummary: ""}
  //     ],
  //   summary: ""
  // };
  // $scope.runSearchResult = () => {
  //   SearchFactory.getSearchResult()
  //   .then( (searchObj) => {
  //     console.log("DATA", SearchFactory.getCar());
  //   $scope.item = searchObj;
  // var carObject = SearchFactory.getCar();
  //     console.log("newSearch", searchObj.ratings[0].score);
  //     console.log("item", $scope.item);
  //     console.log("searchObj", searchObj);
  //     $scope.newSearch.make = carObject.make.name;
  //     $scope.newSearch.model = searchObj.model.name;
  //     $scope.newSearch.style = searchObj.style.name;
  //     $scope.newSearch.year = searchObj.year.year;
  //     $scope.newSearch.ratings[0].performanceScore = searchObj.ratings[0].score;
  //     $scope.newSearch.ratings[0].performanceSummary = searchObj.ratings[0].summary;
  //     $scope.newSearch.ratings[1].comfortScore = searchObj.ratings[1].score;
  //     $scope.newSearch.ratings[1].comfortSummary = searchObj.ratings[1].summary;
  //     $scope.newSearch.ratings[2].interiorScore = searchObj.ratings[2].score;
  //     $scope.newSearch.ratings[2].interiorSummary = searchObj.ratings[2].summary;
  //     $scope.newSearch.ratings[3].valueScore = searchObj.ratings[3].score;
  //     $scope.newSearch.ratings[3].valueSummary = searchObj.ratings[3].summary;
  //     $scope.newSearch.ratings[4].funToDriveScore = searchObj.ratings[4].score;
  //     $scope.newSearch.ratings[4].funToDriveSummary = searchObj.ratings[4].summary;
  //     $scope.newSearch.summary = searchObj.summary;
  //     return searchObj;
    // });

  // };


  // $scope.addToFb = () => {
  //   SearchFactory.postSearchToFb($scope.newSearch)
  //   .then(
  //     (data) => console.log('search saved!'),
  //     (error) => console.log(error)
  //   );
  // };







});
