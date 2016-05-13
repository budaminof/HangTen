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
      'postsService',
      'accountService'
    ];

    function navController ($log, postsService, accountService) {
      var vm = this;
      vm.post = {};
      vm.formSubmit = formSubmit;
      vm.formClose = formClose;
      vm.setSort = setSort;
      vm.search = postsService.search ;
      vm.logOut = logOut;

      function setSort(sortBy){
        postsService.sort.criteria = sortBy;
        return
      }

      function formSubmit (myForm) {
        var newPost = angular.copy(vm.post);
        myForm.$setPristine();
        myForm.$setUntouched();
        vm.post = {};

        postsService.addPost(newPost).then(function (res){
          return res;
        })
      }

      function formClose (myForm) {
        vm.post = {};
        myForm.$setPristine();
        myForm.$setUntouched();
      }

      function logOut () {
        accountService.logOut()
        return
      }

    }

})();
