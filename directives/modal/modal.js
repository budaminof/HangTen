angular.module('myApp').directive('modal', function (postsService) {
  return {
    restrict: 'E',
    templateUrl: '/directives/modal/modal.html',
    link: function (scope, element, attr, fn) {

      scope.formSubmit = function () {
        var newPost = angular.copy(scope.form);

        scope.myForm.$setPristine();
        scope.myForm.$setUntouched();
        postsService.addPost(newPost);
        scope.form = {};
      }

      scope.formClose = function () {
        scope.form = {};
        scope.myForm.$setPristine();
        scope.myForm.$setUntouched();
      }

      scope.makeAComment = function (post){
        scope.activePost = post;
      }

      scope.commentSubmit = function () {
        var newComment = angular.copy(scope.comment);
        
        scope.activePost.comments.push(newComment);
        scope.comment = {};
        scope.commentForm.$setPristine();
        scope.commentForm.$setUntouched();
      }

      scope.commentClose = function () {
        scope.comment = {};
        scope.commentForm.$setPristine();
        scope.commentForm.$setUntouched();
      }

    }
  }
})
