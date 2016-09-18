'use strict';
var app = angular.module("RatingApp", ["ngRoute", 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
.constant("FirebaseURL", "https://safety1-b7b77.firebaseio.com/");



let isAuth = (AuthFactory) => new Promise( (resolve, reject) => {
    if(AuthFactory.isAuthenticated()) {
        console.log("Authenticated user , Go a head");
        resolve();
    }else {
        console.log("Not Authenticated user , Go a away");
        reject ();
    }
});


app.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        }).
        when('/login', {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        }).
        when('/home', {
            templateUrl: "partials/searchBar.html",
            controller: "SearchBarCtrl"
        }).
        when('/result', {
            templateUrl: "partials/searchResult.html",
            controller: "SearchResultCtrl"
        }).
        when('/favorite', {
            templateUrl: "partials/favorite.html",
            controller: "FavoriteCtrl"
        }).
         otherwise("/");

});

  app.run( ($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });


