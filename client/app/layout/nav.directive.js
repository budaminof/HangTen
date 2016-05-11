(function() {
  'use strict';

  angular.module('app')
    .directive('navbar', navDirective);

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

    function navController ($log, postsService) {
      console.log('IN THE FUCKING NAV CONTROLLER');
      var vm = this;
      vm.post = {};
      vm.formSubmit = formSubmit;
      vm.formClose = formClose;
      vm.test = test;
      vm.setSort = setSort;

      function test () {
        return console.log('CLICK MOTHER FUCKER');
      }

      function formSubmit (myForm) {
        $log.log('form submit');
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
