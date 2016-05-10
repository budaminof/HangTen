angular.module('myApp').directive('posts', ['postsService', '$log', function (postsService, $log) {
  return {
    restrict: 'E',
    templateUrl: '/directives/posts/posts.html',
    scope:{
      vm: "="
    },
    link: function (scope, element, attr, fn) {
      scope.data = postsService.getData();
    }
  }
}])
