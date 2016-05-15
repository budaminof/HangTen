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
      '$log',
      'currentUserService'
    ];

    function postsController (postsService, $log, currentUserService) {
      var vm = this;
      vm.voteUp = voteUp;
      vm.voteDown = voteDown;
      vm.commentShow = commentShow;
      vm.makeAComment = makeAComment;
      vm.commentClose = commentClose;
      vm.commentSubmit = commentSubmit;
      vm.sort = postsService.sort;
      vm.search = postsService.search;
      vm.activePostId = '';
      vm.deletePost = deletePost;
      vm.deleteComment = deleteComment;

      postsService.getPosts().then(function (posts){
        return vm.posts = posts;
      });
      currentUserService.getCurrentUser()
      .then(function (user) {
        vm.user = user
        return vm.user
      })

      function voteUp (post) {
        postsService.updateVote(post, 'up');
        return
      }

       function voteDown (post) {
        postsService.updateVote(post, 'down');
        return
      }

      function commentShow (post) {
        post.show = !post.show;
        return
      }

      function makeAComment (post){
        vm.activePostId = post.post_id;
        return
      }

      function commentSubmit (form) {
        var newComment = angular.copy(vm.comment);
        newComment.post_id = vm.activePostId;
        newComment.user_id = vm.user.user_id;

        postsService.submitComment(newComment, vm.user.username)
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

      function deletePost (post){
        postsService.deletePost(post);
        return
      }

      function deleteComment (comment, post){
        postsService.deleteComment(comment);
        post.show = false;
        return
      }

    }

})();
