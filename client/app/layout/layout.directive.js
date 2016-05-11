(function () {
  'use strict';

    angular.module('app')
      .directive('app', appDirective);

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
        $log.log('IN THE LAYOUT DIR');
        var vm = this;
        vm.testy = function () {
          $log.log('IM GETTING TESTY')
        }

      }
}());
