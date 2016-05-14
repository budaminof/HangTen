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
      login: login,
      logOut: logOut,
    }

    function createUser (user){
      return $http.post('/api/v1/users/signup', user)
      .then(function (res){
        $window.localStorage.setItem('token', res.data.token)
        $state.go('posts', {}, {reload:true});
      })
    }

    function login (user) {
      return $http.post('/api/v1/users/login', user)
      .then(function (res){
        $window.localStorage.setItem('token', res.data.token);
        $state.go('posts', {}, {reload:true});
      })
    }

    function logOut (){
      $window.localStorage.clear();
      $state.go('login', {}, {reload:true});
    }

  }

}());
