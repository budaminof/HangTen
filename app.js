var app = angular.module('myApp', ['ngAnimate', 'angularMoment', 'ngMessages']);

app.controller('MainCtrl', function ($scope, postsService) {
  $scope.vm = {};
  $scope.form = {};
  $scope.activePost = {};
  $scope.comment = {};
  $scope.data = postsService.data;

  $scope.voteUp = function (post) {
    post.votes++;
  }

  $scope.voteDown = function (post) {
      post.votes--;
  }

  $scope.sort = function (sortedBy) {
    $scope.vm.sort = sortedBy;
  }

  $scope.formSubmit = function (){
    $scope.form.votes = 0;
    $scope.form.comments = [];
    $scope.form.show = false;
    $scope.form.date = new Date();

    $scope.data.push($scope.form);
    $scope.form = {}
    $scope.myForm.$setUntouched();
  }

  $scope.formClose = function () {
    $scope.form = {};
    $scope.myForm.$setUntouched();
  }

  $scope.commentShow = function (post) {
    post.show = !post.show;
  }

  $scope.commentSubmit = function () {
    $scope.activePost.comments.push($scope.comment);
    $scope.comment = {};
    $scope.commentForm.$setUntouched();
  }

  $scope.commentClose = function () {
    $scope.comment = {};
    $scope.commentForm.$setUntouched();
  }

  $scope.makeAComment = function (post){
    $scope.activePost = post;
  }

})

.controller('timeController', function($scope) {
  $scope.view = {};
  $scope.view.time = new Date();

});
