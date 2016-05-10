angular.module('myApp').controller('timeController', function($scope) {
  $scope.view = {};
  $scope.view.time = new Date();
  
});
