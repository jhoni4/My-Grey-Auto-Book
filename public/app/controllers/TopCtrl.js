'use strict';

app.controller("TopCtrl", function ($scope, $location, $window, AuthFactory) {
  $scope.isLoggedIn = false;
  let currentUser = null;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      currentUser = user.uid;
      $scope.isLoggedIn = true;
    }else {
      currentUser = null;
      $scope.isLoggedIn = false;
      $window.location.href = "#/login";
    }
      $scope.$apply();
  });

  $scope.getUser = function() {
    return currentUser;
  };

  $scope.logOut = () => {
    console.log("you clicked logOut");
    AuthFactory.logoutUser()
    .then( (data) => {
    });
  };





});
