(function() {
  'use strict';

  angular.module('app')
  .factory('accountService', accountFactory);

  accountFactory.$inject = ['$log', '$http', '$state', '$window'];

  function accountFactory ($log, $http, $state, $window) {
    return {
      createUser: createUser
    }

    function createUser (user){
      return $http.post('/api/v1/users/signup', user)
      .then(function (res){
        console.log('in user factory', res);
        $window.localStorage.setItem('token', res.data.token)
        $state.go('posts');
      })
    }
  }

}());
