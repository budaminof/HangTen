(function() {
  'use strict';

  var dependencies = [
    'ngAnimate',
    'ngMessages',
    'ui.router',
    'app.posts'
  ];


  angular.module('app', dependencies)
    .config(setupRoutes);


  setupRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('app', {
        url: "/",
        template: "<reddit-clone></reddit-clone>"
      });
  }
})();
