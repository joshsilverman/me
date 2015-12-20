'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global',
  function($scope, Global) {
    $scope.global = Global;
    $scope.sites = {
      'photos':{
        'name':'Photos & Places',
        'text':'Photos & Places.',
        'image':'/system/assets/img/travel2.jpg'
      },
      'me':{
        'name':'Me',
        'text':'Me',
        'image':'/system/assets/img/me2.jpg'
      },
      'wisr':{
        'name':'Wisr.com',
        'text':'Wisr.com',
        'image':'/system/assets/img/wisr2.png'
      },
      'books':{
        'name':'Books',
        'text':'Books',
        'image':'/system/assets/img/books.jpg'
      },
      'map':{
        'name':'Map',
        'text':'Map',
        'image':'/system/assets/img/map.gif'
      },
      'interests':{
        'name':'Interests',
        'text':'Interests',
        'image':'/system/assets/img/interests.png'
      }
    };
    $scope.packages = {
      'gmap':{
        'name':'gmap',
        'text':'gmap lets you add geographical information to your applications objects',
        'author':'linnovate',
        'link':'http://www.qed42.com',
        'image':'/theme/assets/img/gmap.png'
      },
      'upload':{
        'name':'Upload',
        'text':'hello text',
        'author':'Linnovate',
        'link':'http://www.linnovate.net',
        'image':'http://cdn.designbyhumans.com/pictures/blog/09-2013/pop-culture-cats/Pop_Culture_Cats_Hamilton_Hipster.jpg'
      },
      'socket':{
        'name':'Socket',
        'text':'Socket.io support',
        'author':'Linnovate',
        'link':'http://www.linnovate.net',
        'image':'http://cdn.designbyhumans.com/pictures/blog/09-2013/pop-culture-cats/Pop_Culture_Cats_Hamilton_Hipster.jpg'
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
