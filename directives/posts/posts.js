angular.module('myApp').directive('posts', function () {
  return {
    restrict: 'E',
    templateUrl: '/directives/posts/posts.html'
  }
})