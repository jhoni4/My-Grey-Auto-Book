'use strict';

app.controller("SearchResultCtrl", function($scope, SearchFactory ) {

  $scope.item = SearchFactory.getItems();
  // .then( (item) => {
    // console.log("ITEM", $scope.item.make.name);
  // });



  $scope.isCollapsed = true;
  $scope.isCollapsedHorizontal = true;

// Materialize.toast('I am a toast!', 4000);
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
    comment: "",
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

//CHART//////////////////

  $scope.creatChart = (searchObj) => {
    console.log("am clicked", searchObj)
    $scope.myDataSource.chart.caption = searchObj.make.name;
    $scope.myDataSource.chart.subCaption = searchObj.model.name;
    $scope.myDataSource.data[0].value = searchObj.ratings[0].score;
    $scope.myDataSource.data[1].value = searchObj.ratings[1].score;
    $scope.myDataSource.data[2].value = searchObj.ratings[2].score;
    $scope.myDataSource.data[3].value = searchObj.ratings[3].score;
    $scope.myDataSource.data[4].value = searchObj.ratings[4].score;
    console.log("CHART ITEM", $scope.myDataSource.chart.caption);
  };



$scope.myDataSource = {
        chart: {
            caption: "",
            subCaption: "",
        },
        data:[{
            label: "Performance",
            value: ""
        },
        {
            label: "Comfort",
            value: ""
        },
        {
            label: "Interior",
            value: ""
        },
        {
            label: "Value",
            value: ""
        },
        {
            label: "FunToDrive",
            value: ""
        }]
      };




});
