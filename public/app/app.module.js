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

  function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider) {

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
        resolve: {
          currentUser: currentUserFn
        }
        })
      .state('signup',{
        template: "<reddit-account></reddit-account>",
        parent: 'app',
        url: "/signup",
        resolve: {
          currentUser: currentUserFn
        }
        })

      }

      function currentUserFn ($http, currentUserService) {
        if (localStorage.getItem('token')) {
          const config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
          }
          return $http.get('/api/v1/users/me', config)
          .then(function (response) {
            return currentUserService.setCurrentUser(response.data);
          })
          .catch(function () {
            localStorage.clear();
            return currentUserService.setCurrentUser(null);;
          })
        } else {
          return currentUserService.setCurrentUser(null);;
        }
      }

})();
