(function() {
  'use strict';

  angular.module('app.posts')
    .directive('posts', postsDirective)

    function postsDirective () {
      return {
        restrict: 'E',
        templateUrl: '/app/posts/posts.directive.html',
        controller: postsController,
        controllerAs: 'vm'
      }
    }

    postsController.$inject = [
      'postsService',
      '$log'
    ];

    function postsController(postsService, $log) {
      var vm = this;
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

      /////// WHO KNOWS???????
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

})();
