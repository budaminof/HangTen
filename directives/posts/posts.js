angular.module('myApp').directive('posts', ['postsService', '$log', function (postsService, $log) {
  return {
    restrict: 'E',
    templateUrl: '/directives/posts/posts.html',
    scope:{
      vm: "="
    },
    link: function (scope, element, attr, fn) {
      scope.data = postsService.getData();

      // added from modal js, might not work
      scope.commentSubmit = function () {
        var newComment = angular.copy(scope.comment);
        postsService.submitComment(newComment)

        scope.comment = {};
        scope.commentForm.$setPristine();
        scope.commentForm.$setUntouched();
      }

      scope.commentClose = function () {
        scope.comment = {};
        scope.commentForm.$setPristine();
        scope.commentForm.$setUntouched();
      }
      ///////
      
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
