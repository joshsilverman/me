'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global',
  function($scope, Global) {
    $scope.global = Global;
    $scope.icons = {
      'photos':{
        'name':'Photos & Places',
        'image':'/system/assets/img/travel2.jpg',
        'link':'/photos'
      },
      'me':{
        'name':'Me',
        'image':'/system/assets/img/me3.jpg'
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

    $scope.projects = [
      [
        {
          'name':'Jonemo',
          'colorClass':'yellow-bg',
          'link':'https://www.causes.com/causes/639384-connect-jonemo/about'
        },
        {
          'name':'Wisr',
          'colorClass':'blue-bg',
          'link':''
        }
      ],
      [
        {
          'name':'Timeline',
          'colorClass':'green-bg',
          'link':''
        },
        {
          'name':'Analytics',
          'colorClass':'orange-bg',
          'link':''
        }
      ]
    ];

    $scope.links = [
      [
        {
          'name':'LinkedIn',
          'colorClass':'yellow-bg',
          'link':''
        },
        {
          'name':'Github',
          'colorClass':'blue-bg',
          'link':''
        }
      ],
      [
        {
          'name':'Twitter',
          'colorClass':'green-bg',
          'link':''
        },
        {
          'name':'GoodReads',
          'colorClass':'orange-bg',
          'link':''
        }
      ]
    ];

    $scope.code = [
      [
        {
          'name':'sk-analytics',
          'colorClass':'yellow-bg',
          'link':''
        },
        {
          'name':'wisr',
          'colorClass':'blue-bg',
          'link':''
        }
      ],
      [
        {
          'name':'wisr-ng',
          'colorClass':'green-bg',
          'link':''
        },
        {
          'name':'Github',
          'colorClass':'orange-bg',
          'link':''
        }
      ]
    ];

    $scope.$watch(function () {
      for (var i = 0; i < $scope.icons.length; i+=1) {
        if ($scope.icons[i].active) {
          return $scope.icons[i];
        }
      }
    }, function (currentSlide, previousSlide) {
      if (currentSlide !== previousSlide) {
        console.log('currentSlide:', currentSlide);
      }
    });
  }
]);
