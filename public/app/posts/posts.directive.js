(function() {
  'use strict';

  angular.module('app.posts')
    .directive('redditPosts', postsDirective)

    function postsDirective () {
      return {
        restrict: 'E',
        scope: {},
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

      postsService.getPosts().then(function (posts){
        return vm.posts = posts;
      });

      vm.voteUp = voteUp;
      vm.voteDown = voteDown;
      vm.commentShow = commentShow;
      vm.makeAComment = makeAComment;
      vm.commentClose = commentClose;
      vm.commentSubmit = commentSubmit;
      vm.sort = postsService.sort;
      vm.search = postsService.search;
      vm.activePostId = '';

      function voteUp (post) {
        post.votes++;
        postsService.updateVote(post, 'up');
        return
      }

       function voteDown (post) {
          post.votes--;
          postsService.updateVote(post, 'down');
          return
      }

      function commentShow (post) {
        post.show = !post.show;
        return
      }

      function makeAComment (post){
        vm.activePostId = post.id;
        postsService.makeAComment(post)
        return
      }

      function commentSubmit (form) {
        var newComment = angular.copy(vm.comment);
        newComment.post_id = vm.activePostId;
        newComment.user_id = 3;

        postsService.submitComment(newComment)
        vm.comment = {};
        vm.activePostId = null;
        form.$setPristine();
        form.$setUntouched();
        return
      }

      function commentClose (form) {
        vm.comment = {};
        form.$setPristine();
        form.$setUntouched();
        return
      }
      
    }

})();
