(function () {
  'use strict';

    angular.module('app')
      .directive('app', appDirective);

      function appDirective() {
        return {
          restrict: 'E',
          templateUrl: '/app/layout/layout.directive.html',
          controller: controller,
          controllerAs: 'vm'
        }
      }

      controller.$inject = ["$log"]

      function controller ($log) {
        $log.log('IN THE LAYOUT DIR');
        var vm = this;
        var testy = function () {
          $log.log('IM GETTING TESTY')
        }

      }
}());
