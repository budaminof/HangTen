(function () {
  'use strict';

    angular.module('app')
      .directive('app', appDirective);

      function appDirective() {
        return {
          restrict: 'E',
          // should scope be closed?
          templateUrl: '/app/layout/layout.directive.html',
          controller: function () {
            console.log('I AM IN THE LAYOUT DIRECTIVE AND ALSO CONTROLLER OR SOMETHING NOT REALLY SURE');
          }
        }
      }
}());
