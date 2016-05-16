(function() {
  'use strict';

  angular.module('app')
    .factory('currentUserService', activeUserFactory);

    activeUserFactory.$inject = ['$log', '$q'];

    function activeUserFactory ($log, $q) {
      var _user = {};

      return {
        setCurrentUser: setCurrentUser,
        getCurrentUser: getCurrentUser
      }

     function setCurrentUser (user){
       return  _user = user;

     }

     function getCurrentUser (){
       return _user;
      //  return $q(function (resolve, reject) {
          //  resolve( _user)
      //  })
     }

  }

}());
