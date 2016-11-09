'use strict';

app.controller("NavCtrl", function($scope, AuthFactory) {
  $scope.hit = "submit";
   $scope.name = 'World';


  $scope.items = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];


});
