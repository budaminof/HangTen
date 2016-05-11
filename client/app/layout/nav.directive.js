(function() {
  'use strict';

  angular.module('app')
    .directive('redditNavbar', navDirective);

    function navDirective() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: '/app/layout/nav.directive.html',
        controller: navController,
        controllerAs: 'vm'
      }
    }

    navController.$inject = [
      '$log',
      'postsService'
    ];

    function navController ($log, postsService) {
      var vm = this;
      vm.post = {};
      vm.formSubmit = formSubmit;
      vm.formClose = formClose;
      vm.setSort = setSort;

      function formSubmit (myForm) {
        var newPost = angular.copy(vm.post);
        $log.info('after copy', newPost);
        myForm.$setPristine();
        myForm.$setUntouched();
        postsService.addPost(newPost);
        vm.post = {};
      }

      function formClose (myForm) {
        $log.log('in form close!');
        vm.post = {};
        myForm.$setPristine();
        myForm.$setUntouched();
      }

      function setSort (criteria) {
        console.log('IN SORT', criteria);
        $log.log('SERIOUSLY IN SORT', criteria)
        // postsService.setSortCriteria(criteria);
        return;
      }
    }

})();
