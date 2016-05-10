angular.module('myApp').directive('headerNav',['$log', function ($log) {
  return {
    restrict: 'E',
    templateUrl: '/directives/header/header.html',
    scope: {
      vm: '='
    },
    link: function (scope, element, attr, fn){
      scope.sort = function (sortedBy) {
        scope.vm.sort = sortedBy;
      }

    }
  }
}])
