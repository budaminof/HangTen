(function() {
  'use strict';
  var dependencies = [
    'ngAnimate',
    'ngMessages',
    'ui.router',
    'app.posts'
  ];

  angular.module('app', dependencies)
    .config(setupRoutes)
    .run(function ($rootScope, $state, $window, $location) {
      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {

        if(toState.publicOnly && localStorage.getItem('token')) {
          event.preventDefault();
          $state.go('posts')
        }
      });
    })
    .factory('authInterceptor', function ($location) {
      return {
        request: function (config) {
          if (localStorage.getItem('token')) {
              config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
            }
          return config
        },
        responseError: function (response) {
          if (response.status === 403){
            localStorage.removeItem('token');
            $location.path('/')
            // event.preventDefault();
            // $state.go('posts')
          }
          return response

        }
      }
    })

  setupRoutes.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$httpProvider'
  ];

  function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider
       .state('app', {
         abstract: true,
         template: "<reddit-clone></reddit-clone>",
      })
      .state('posts',{
        template: "<reddit-posts></reddit-posts>",
        parent: 'app',
        url: "/",
        resolve: {
          currentUser: currentUserFn
        }
      })
      .state('login',{
        template: "<reddit-account></reddit-account>",
        parent: 'app',
        url: "/login",
        publicOnly: true,
        resolve: {
          currentUser: currentUserFn
        }
        })
      .state('signup',{
        template: "<reddit-account></reddit-account>",
        parent: 'app',
        url: "/signup",
        publicOnly: true,
        resolve: {
          currentUser: currentUserFn
        }
        })

      }

  function currentUserFn ($http, currentUserService) {
      return $http.get('/api/v1/users/me')
      .then(function (response) {
        return currentUserService.setCurrentUser(response.data);
      })
      .catch(function () {
        localStorage.clear();
        return currentUserService.setCurrentUser(null);;
      })
    }

})();
