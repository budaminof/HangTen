angular.module('myApp').directive('headerNav', function () {
  return {
    restrict: 'E',
    templateUrl: '/directives/header/header.html',
    link: function (scope, element, attr, fn){
      scope.sort = function (sortedBy) {
        scope.vm.sort = sortedBy;
      }

    }
  }
})
