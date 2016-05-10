(function() {
  'use strict';

  angular.module('app')
    .directive('nav', navDirective);

    function navDirective() {
      return {
        restrict: 'E',
        templateUrl: '/app/layout/nav.directive.html',
        controller: navController,
        controllerAs: 'vm'
      }
    }

    navController.$inject = [
      '$log',
      'postsService'
    ];

    function navController($log, postsService) {
      var vm = this;
      vm.formSubmit = formSubmit();
      vm.formClose = formClose();

      // moving to service
      // scope.sort = function (sortedBy) {
      //   scope.vm.sort = sortedBy;
      // }

      ///moved from modal- might not work!

      function formSubmit () {
        $log.info('In the form submit!')
        var newPost = angular.copy(scope.form);
        scope.myForm.$setPristine();
        scope.myForm.$setUntouched();
        postsService.addPost(newPost);
        scope.form = {};
      }

      function formClose () {
        scope.form = {};
        scope.myForm.$setPristine();
        scope.myForm.$setUntouched();
      }

})();
