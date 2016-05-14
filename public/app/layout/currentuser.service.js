(function() {
  'use strict';

  angular.module('app')
  .factory('currentUserService', currentUserFactory);

  currentUserFactory.$inject = ['$log'];

  function currentUserFactory ($log) {
    var _user = {};

    return {
      setCurrentUser: setCurrentUser,
      getCurrentUser: getCurrentUser
    }

     function setCurrentUser (user){
       _user = user;
       return
     }

     function getCurrentUser (){
       return _user;
     }

  }

}());
