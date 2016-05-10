angular.module('app.posts').controller('timeController', function($scope) {
  $scope.view = {};
  $scope.view.time = new Date();

});
