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
      'currentUserService',
      '$scope'
    ];

    function postsController (postsService, $log, currentUserService, $scope) {
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
      vm.showDelete = showDelete;
      vm.user = currentUserService.getCurrentUser();
      // vm.errors = postsService.getErrors();

      postsService.getPosts().then(function (posts){
        return vm.posts = posts;
      });

      // currentUserService.getCurrentUser()
      // .then(function (user) {
      //   vm.user = user
      //   return vm.user
      // })
      // $scope.$watch(function(){
      //   return currentUserService.getCurrentUser();
      // }, function(newValue){
      //   vm.user = newValue;
      // }, true);

      function voteUp (post) {
        postsService.updateVote(post, 'up')
        .then(function (res){
          if(res.data){
            return vm.errors = res.data.error[0];
          }
        });
        return 
      }

       function voteDown (post) {
        postsService.updateVote(post, 'down')
        .then(function (res){
          if(res.data){
            return vm.errors = res.data.error[0];
          }
        });
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
        ////add id statement to check if user is user
        postsService.deletePost(post);
        return
      }

      function deleteComment (comment, post){
        ////add id statement to check if user is user
        postsService.deleteComment(comment);
        post.show = false;
        return
      }

      function showDelete(data) {
        if(!vm.user)return false;
        if(data.user_id === vm.user.user_id){
          return true;
        }else {
          return false;
        }
      }

    }

})();
