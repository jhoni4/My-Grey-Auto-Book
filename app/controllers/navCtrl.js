'use strict';

app.controller("NavCtrl", function($scope, AuthFactory) {
  $scope.hit = "submit";

   // $scope.navCollapsed = false;
   $scope.name = 'World';


    $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];
// $scope.logOut = () => {
//     console.log("you clicked logOut");
//     AuthFactory.logoutUser($scope.account)
//     .then( (data) => {
//       console.log("you are logged out, man");
//     });
//   };

});
