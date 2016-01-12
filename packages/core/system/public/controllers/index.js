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
          'description': 'A machine learning API that enables using scikit-learn through a python/Django REST interface. The library trains models with cross-validation and stores them in a postgres database.',
          'group':'code',
          'colorClass':'cyan-bg',
          'link':'https://github.com/joshsilverman/sk_analytics'
        },
        {
          'name':'wisr',
          'description':'A Ruby on Rails API for sering Angular and iOS apps. Also, contains Twitter and Email engines for a question & answer learning system.',
          'group':'code',
          'colorClass':'purple-bg',
          'link':'https://github.com/joshsilverman/QuizMe'
        }
      ],
      [
        {
          'name':'wisr-ng',
          'description': 'An AngularJS web frontend for use with the Wisr API. This repo contains the landing page, question creation, and question & answer interface for Wisr.com',
          'group':'code',
          'colorClass':'red-bg',
          'link':'https://github.com/joshsilverman/wisr-ng'
        },
        {
          'name':'All',
          'description':'Link to all Github repositories.',
          'group':'code',
          'colorClass':'orange-bg',
          'link':'https://github.com/joshsilverman'
        }
      ]
    ];

    $scope.links = [
      [
        {
          'name':'LinkedIn',
          'group':'links',
          'colorClass':'green-bg',
          'link':'https://www.linkedin.com/in/joshssilverman'
        },
        {
          'name':'Github',
          'group':'links',
          'colorClass':'orange-bg',
          'link':'https://github.com/joshsilverman'
        }
      ],
      [
        {
          'name':'',
          'group':'links',
          'colorClass':'cyan-bg',
          'link':''
        },
        {
          'name':'Books',
          'group':'links',
          'colorClass':'purple-bg',
          'link':'https://www.goodreads.com/review/list/15242620-josh-silverman?shelf=read'
        }
      ]
    ];

    $scope.projects = [
      [
        {
          'name':'Jonemo',
          'description': 'Two friends and I built a computer lab at a rural school on the Kenyan/Tanzanian border. We did fund-raising, planning, logistics, installation, and teacher training.',
          'group':'projects',
          'colorClass':'blue-bg',
          'link':'https://www.causes.com/causes/639384-connect-jonemo/about'
        },
        {
          'name':'Wisr',
          'description':'Wisr taught anything from Chemistry to Algebra through Twitter/chat/SMS/email. Users learned by answering questions ("If 4x + 1x + 3x = 40, then x = ?") in the communication channel where they were most comfortable. ',
          'group':'projects',
          'colorClass':'purple-bg',
          'link':''
        }
      ],
      [
        {
          'name':'Timeline',
          'description': 'I have interests in history, innovation and visualization. So, I combined these interests into a visual timeline of the industrial revolution.',
          'group':'projects',
          'colorClass':'orange-bg',
          'link':'http://cdn.knightlab.com/libs/timeline/latest/embed/index.html?source=0AliLeS3-noSidFJEdExoNzJWb1ZZcjdRWWJ4VGIxVGc&font=Bevan-PotanoSans&maptype=toner&lang=en&height=650'
        },
        {
          'name':'',
          'group':'projects',
          'colorClass':'yellow-bg',
          'link':''
        }
      ]
    ];

    $scope.contact = [
      [
        {
          'name':'Email',
          'group':'contact',
          'colorClass':'purple-bg',
          'link':'mailto:hello@joshsilverman.net'
        },
        {
          'name':'Tweet',
          'group':'contact',
          'colorClass':'cyan-bg',
          'link':'https://twitter.com/silverman'
        }
      ]
    ];

    $scope.$on('assignActive', function(event, item) {
      $scope.activeItem = null;

      if (item.name) {
        $scope.activeItem = item;  
      }
    });


    $scope.closeModals = function($event) {
      $event.stopPropagation();
      console.log('close');
      $scope.activeItem = null;
    };
  }
]);
