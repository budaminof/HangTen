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
    var _errors = [];
    var _errorsUp = [];

    return {
      createUser: createUser,
      login: login,
      logOut: logOut,
      getErrors: getErrors,
      getErrorsUp: getErrorsUp
    }

    function createUser (user){
      _errorsUp.length = 0;
      return $http.post('/api/v1/users/signup', user)
      .then(function (res){
        if(!(res.status === 200)){
          return _errorsUp.push(res.data.errors[0])
        }
        if(res.data.token !== undefined) {
          $window.localStorage.setItem('token', res.data.token);
          $state.go('posts', {}, {reload:true});
        }
      })
      .catch(function (err){
        return err;
      })
    }

    function login (user) {
      _error.length = 0;
      return $http.post('/api/v1/users/login', user)
      .then(function (res){
        if(!(res.status === 200)){
          return _errors.push(res.data.errors[0])
        }
        if(res.data.token !== undefined) {
          $window.localStorage.setItem('token', res.data.token);
          $state.go('posts', {}, {reload:true});
        }
      })
      .catch(function (err){
        return err;
      })
    }

    function logOut (){
      $window.localStorage.clear();
      $state.go('login', {}, {reload:true});
    }

    function getErrors () {
      return _errors;
    }

    function getErrorsUp(){
      return _errorsUp;
    }

  }

}());
