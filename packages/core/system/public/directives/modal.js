'use strict';

angular.module('mean.system').directive('modal', function(){
  function link(scope, element, attrs) {

  }

  return {
    scope: {
      item: '=',
      close: '&'
    },
    templateUrl: '/system/views/modal.html',
    link: link
  }
});
