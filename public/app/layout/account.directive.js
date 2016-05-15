(function() {
  'use strict';

    angular.module('app')
      .directive('redditAccount', accountDirective);

      function accountDirective (){
        return {
          restrict: "E",
          scope: {},
          templateUrl: "app/layout/account.directive.html",
          controller: accountController,
          controllerAs: "vm"
        }
      }

      accountController.$inject = [
        '$log',
        'accountService'
      ];

      function accountController($log, accountService) {
        var vm = this;
        vm.signUpSubmit = signUpSubmit;
        vm.loginSubmit = loginSubmit;
        vm.errors = accountService.getErrors();
        vm.errorsUp = accountService.getErrorsUp();

        function signUpSubmit (form) {
          var newUser = angular.copy(vm.user);
          vm.user = {};
          form.$setUntouched();
          return accountService.createUser(newUser);
        }

        function loginSubmit(form) {
          var loggedUser = angular.copy(vm.userlog);
          vm.userlog = {};
          form.$setUntouched();
          return accountService.login(loggedUser);
        }
      }
}());
