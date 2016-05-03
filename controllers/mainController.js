angular.module('myApp').controller('MainCtrl', function ($scope, postsService) {
  $scope.vm = {};
  $scope.form = {};
  $scope.activePost = {};
  $scope.comment = {};
  $scope.data = postsService.data;
})
