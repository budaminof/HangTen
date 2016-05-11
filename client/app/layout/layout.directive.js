(function () {
  'use strict';

    angular.module('app')
      .directive('redditClone', appDirective);

      function appDirective() {
        return {
          restrict: 'E',
          scope: {},
          templateUrl: '/app/layout/layout.directive.html',
          controller: controller,
          controllerAs: 'vm'
        }
      }

      controller.$inject = ["$log"]

      function controller ($log) {
        var vm = this;

      }
}());
