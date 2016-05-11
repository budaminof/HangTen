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

    function postsController (postsService, $log) {
      var vm = this;
      vm.posts = postsService.getPosts();
      vm.voteUp = voteUp;
      vm.voteDown = voteDown;
      vm.commentShow = commentShow;
      vm.makeAComment = makeAComment;
      vm.commentClose = commentClose;
      vm.commentSubmit = commentSubmit;

      // added from modal js, might not work
      function commentSubmit (form) {
        var newComment = angular.copy(vm.comment);
        postsService.submitComment(newComment)
        vm.comment = {};
        form.$setPristine();
        form.$setUntouched();
      }

      function commentClose (form) {
        vm.comment = {};
        form.$setPristine();
        form.$setUntouched();
      }

      function voteUp (post) {
        post.votes++;
      }

       function voteDown (post) {
          post.votes--;
      }

      function commentShow (post) {
        post.show = !post.show;
      }

      function makeAComment (post){
        postsService.makeAComment(post)
      }
    }

})();
