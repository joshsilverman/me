'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global',
  function($scope, Global) {
    $scope.global = Global;
    $scope.sites = {
      'photos':{
        'name':'Photos & Places',
        'image':'/system/assets/img/travel2.jpg'
      },
      'me':{
        'name':'Me',
        'image':'/system/assets/img/me2.jpg'
      },
      'wisr':{
        'name':'Wisr.com',
        'image':'/system/assets/img/wisr2.png'
      },
      'books':{
        'name':'Books',
        'image':'/system/assets/img/books.jpg'
      },
      'interests':{
        'name':'Interests',
        'image':'/system/assets/img/timeline.png'
      },
      'travel':{
        'name':'Travel',
        'image':'/system/assets/img/map.gif'
      }
    };

    $scope.$watch(function () {
      for (var i = 0; i < $scope.sites.length; i+=1) {
        if ($scope.sites[i].active) {
          return $scope.sites[i];
        }
      }
    }, function (currentSlide, previousSlide) {
      if (currentSlide !== previousSlide) {
        console.log('currentSlide:', currentSlide);
      }
    });
  }
]);
