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
      vm.search = postsService.search;

      function setSort(sortBy){
        postsService.sort.criteria = sortBy;
        return
      }
      function formSubmit (myForm) {
        var newPost = angular.copy(vm.post);
        myForm.$setPristine();
        myForm.$setUntouched();
        postsService.addPost(newPost);
        vm.post = {};
      }

      function formClose (myForm) {
        vm.post = {};
        myForm.$setPristine();
        myForm.$setUntouched();
      }

    }

})();
