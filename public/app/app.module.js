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
         abstract: true,
         template: "<reddit-clone></reddit-clone>",
      })
      .state('app.posts',{
        template: "<reddit-posts></reddit-posts>",
        url: "/"
        })
      .state('app.account',{
        template: "<reddit-account></reddit-account>",
        url: "/login"
        })
      }
})();
