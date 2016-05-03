angular.module('myApp').directive('comments', function () {
  return {
    restrict: 'E',
    templateUrl: '/directives/comments/comments.html',
    link: function (scope, element, attr) {

        scope.voteUp = function (post) {
          post.votes++;
        }

        scope.voteDown = function (post) {
            post.votes--;
        }

        scope.commentShow = function (post) {
          post.show = !post.show;
        }
    }
  }
})
