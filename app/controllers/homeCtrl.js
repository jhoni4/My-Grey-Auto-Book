'use strict';

app.controller('HomeCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;
// var slides = $scope.slides = [image: '/images/slides/acura.jpg', '/images/slides/bmwx4.jpg', '/images/slides/fordRaptor.jpg', '/images/slides/porche911.jpg'];
  $scope.addSlide = function() {
    // var newWidth = 700 + slides.length + 6;
    slides.push({
      // image: '//unsplash.it/' + newWidth + '/700',
      image: 'url("/images/slides/acura.jpg")',
      text: ['Most Fuel Efficient Cars','Top Consumer Rated Sedans of 2017','Top Consumer Rated Luxury Vehicles of 2017','Best Safety Rated Cars'][slides.length % 8],
      id: currIndex++
    });
  };

  for (var i = 0; i < 10; i++) {
    $scope.addSlide();
  }

});
