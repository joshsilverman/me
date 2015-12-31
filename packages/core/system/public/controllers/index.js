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

    $scope.code = [
      [
        {
          'name':'sk-analytics',
          'colorClass':'cyan-bg',
          'link':'https://github.com/joshsilverman/sk_analytics'
        },
        {
          'name':'wisr',
          'colorClass':'purple-bg',
          'link':'https://github.com/joshsilverman/QuizMe'
        }
      ],
      [
        {
          'name':'wisr-ng',
          'colorClass':'red-bg',
          'link':'https://github.com/joshsilverman/wisr-ng'
        },
        {
          'name':'All',
          'colorClass':'orange-bg',
          'link':'https://github.com/joshsilverman'
        }
      ]
    ];

    $scope.links = [
      [
        {
          'name':'LinkedIn',
          'colorClass':'green-bg',
          'link':'https://www.linkedin.com/in/joshssilverman'
        },
        {
          'name':'Github',
          'colorClass':'orange-bg',
          'link':'https://github.com/joshsilverman'
        }
      ],
      [
        {
          'name':'',
          'colorClass':'cyan-bg',
          'link':''
        },
        {
          'name':'GoodReads',
          'colorClass':'purple-bg',
          'link':'https://www.goodreads.com/review/list/15242620-josh-silverman?shelf=read'
        }
      ]
    ];

    $scope.projects = [
      [
        {
          'name':'Jonemo',
          'colorClass':'blue-bg',
          'link':'https://www.causes.com/causes/639384-connect-jonemo/about'
        },
        {
          'name':'Wisr',
          'colorClass':'purple-bg',
          'link':''
        }
      ],
      [
        {
          'name':'Timeline',
          'colorClass':'orange-bg',
          'link':'http://cdn.knightlab.com/libs/timeline/latest/embed/index.html?source=0AliLeS3-noSidFJEdExoNzJWb1ZZcjdRWWJ4VGIxVGc&font=Bevan-PotanoSans&maptype=toner&lang=en&height=650'
        },
        {
          'name':'',
          'colorClass':'yellow-bg',
          'link':''
        }
      ]
    ];

    $scope.contact = [
      [
        {
          'name':'Email',
          'colorClass':'purple-bg',
          'link':'mailto:hello@joshsilverman.net'
        },
        {
          'name':'Tweet',
          'colorClass':'cyan-bg',
          'link':'https://twitter.com/silverman'
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
