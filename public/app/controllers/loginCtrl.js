'use strict';

app.controller("LoginCtrl", function($scope,  $window, AuthFactory)  {
  $scope.account = {
    email: "",
    password: ""
  };

  $scope.register = () => {
    console.log("you clicked register");
    AuthFactory.createUser({
      email: $scope.account.email,
      password: $scope.account.password
    })
    .then( (userData) => {
      console.log("new user", userData);
      // console.log("NEW USER CREATED!!!");
      $scope.logIn();
    }, (error) => {
      console.log(`Error creating user: ${error}`);
    });
  };

  $scope.logIn = () => {
    console.log("you clicked login");
    AuthFactory.loginUser($scope.account)
    .then( (data) => {
      if (data) {
        $window.location.href = "#/home";
      } else {
        $window.location.href = "#/login";
        console.log("Error logging in, man");
      }
    });
  };






});
