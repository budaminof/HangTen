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
      'accountService',
      'currentUserService',
      '$scope'
    ];

    function navController ($log, postsService, accountService, currentUserService, $scope) {
      var vm = this;
      vm.post = {};
      vm.formSubmit = formSubmit;
      vm.formClose = formClose;
      vm.setSort = setSort;
      vm.search = postsService.search;
      vm.logOut = logOut;
      vm.user = currentUserService.getCurrentUser();

      // $scope.$watch(function(){
      //   return currentUserService.getCurrentUser();
      // }, function(newValue){
      //   vm.user = newValue;
      // }, true);

      // currentUserService.getCurrentUser()
      // .then(function (user) {
      //   vm.user = user
      //   return vm.user
      // })

      function setSort(sortBy){
        postsService.sort.criteria = sortBy;
        return
      }

      function formSubmit (myForm) {
        var newPost = angular.copy(vm.post);
        newPost.user_id = vm.user.user_id;
        myForm.$setPristine();
        myForm.$setUntouched();
        vm.post = {};
        postsService.addPost(newPost, vm.user.username).then(function (res){
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
