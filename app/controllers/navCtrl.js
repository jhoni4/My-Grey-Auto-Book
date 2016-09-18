'use strict';

app.controller("NavCtrl", function($scope, AuthFactory) {
  $scope.hit = "submit";

// $scope.logOut = () => {
//     console.log("you clicked logOut");
//     AuthFactory.logoutUser($scope.account)
//     .then( (data) => {
//       console.log("you are logged out, man");
//     });
//   };

});
