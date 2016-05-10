angular.module('myApp').directive('posts', ['postsService', '$log', function (postsService, $log) {
  return {
    restrict: 'E',
    templateUrl: '/directives/posts/posts.html',
    scope:{
      vm: "="
    },
    link: function (scope, element, attr, fn) {
      scope.data = postsService.getData();

      scope.voteUp = function (post) {
        post.votes++;
      }

      scope.voteDown = function (post) {
          post.votes--;
      }

      scope.commentShow = function (post) {
        post.show = !post.show;
      }

      scope.makeAComment = function (post){
        postsService.makeAComment(post)
      }

    }
  }
}])
