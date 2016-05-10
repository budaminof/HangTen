(function() {
  'use strict';

  var dependencies = [
    'ngAnimate',
    'angularMoment',
    'ngMessages',
    'ui.router',
    'app.posts'
  ];


  angular.module('app', dependencies)
    .config(setupRoutes);


  setupRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider){
    console.log("app module loading at all?");
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('app', {
        url: "/",
        template: "<app></app>"
      });
  }
})();
