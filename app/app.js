'use strict';
var app = angular.module("RatingApp", ["ngRoute", 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
.constant("FirebaseURL", "https://safety1-b7b77.firebaseio.com/");


app.config(function($routeProvider) {
    $routeProvider.
        when('/login', {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        }).
        when('/home', {
            templateUrl: "partials/home.html",
            controller: "HomeCtrl"
        }).
        when('/search', {
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
         otherwise("/home");



});
