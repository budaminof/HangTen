(function() {
  'use strict';

  angular.module('app.posts')
    .factory('postsService', factory);

    factory.$inject = [
      '$log',
      '$http'
    ];

    function factory($log, $http) {
      var _activePost = {};

      return {
        // addPost: addPost,
        getPosts: getPosts,
        makeAComment: makeAComment,
        submitComment: submitComment,
        sort: {criteria: "-date"},
        search: {query: ""}
      }

      function addPost(post){
        post.votes = 0;
        post.comments = [];
        post.show = false;
        post.date = new Date();

        _posts.push(post);
        return
      }

      function getPosts() {
        return $http.get('/api/v1/posts');
      }

      function makeAComment(post){
        _activePost = post;
        return
      }

      function submitComment(comment){
        _activePost.comments.push(comment);
        _activePost = null;
        return
      }

    }

})();
