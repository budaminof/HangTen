angular.module('myApp').directive('headerNav',['$log','postsService', function ($log, postsService) {
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

        ///moved from modal- might not work!
        scope.formSubmit = function () {
          var newPost = angular.copy(scope.form);
          scope.myForm.$setPristine();
          scope.myForm.$setUntouched();
          postsService.addPost(newPost);
          scope.form = {};
        }

        scope.formClose = function () {
          scope.form = {};
          scope.myForm.$setPristine();
          scope.myForm.$setUntouched();
        }

    }
  }
}])
