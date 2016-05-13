(function() {
  'use strict';

  angular.module('app')
  .factory('accountService', accountFactory);

  accountFactory.$inject = [
    '$log',
     '$http',
     '$state',
     '$window'
  ];

  function accountFactory ($log, $http, $state, $window) {
    return {
      createUser: createUser,
      logOut: logOut
    }

    function createUser (user){
      return $http.post('/api/v1/users/signup', user)
      .then(function (res){
        $window.localStorage.setItem('token', res.data.token)
        $state.go('posts');
      })
    }

    function logOut (){
      $window.localStorage.clear();
      $state.go('posts');
    }
  }

}());
