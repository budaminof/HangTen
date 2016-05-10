(function() {
  'use strict';

  angular.module('app')
    .directive('reddit', navDirective);

    function navDirective() {
      return {
        restrict: 'E',
        templateUrl: '/app/layout/nav.directive.html',
        controller: navController,
        controllerAs: 'vm'
      }
    }

    navController.$inject = [
      '$log'
      // 'postsService'
    ];

    function navController($log) {
      var vm = this;
      vm.post = {title: 'foo'};
      vm.formSubmit = formSubmit;
      vm.formClose = formClose;


      // moving to service
      // scope.sort = function (sortedBy) {
      //   scope.vm.sort = sortedBy;
      // }

      // moved from modal- might not work!

      function formSubmit (myForm) {
        $log.info('In the form submit!', vm.post);

        var newPost = angular.copy(vm.post);
        $log.info('after copy', newPost);
        myForm.$setPristine();
        myForm.$setUntouched();
        // postsService.addPost(newPost);
        vm.post = {};
      }

      function formClose () {
        vm.post = {};
        vm.myForm.$setPristine();
        vm.myForm.$setUntouched();
      }
    }

}());
