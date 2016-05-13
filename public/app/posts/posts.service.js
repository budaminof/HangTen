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
      var _posts = [];

      return {
        addPost: addPost,
        getPosts: getPosts,
        makeAComment: makeAComment,
        submitComment: submitComment,
        sort: {criteria: "-date"},
        search: {query: ""},
        updateVote: updateVote
      }

      function updateVote (post, direction) {
        if(direction == 'up'){
          return $http.post('/api/v1/posts/'+ post.id +'/voteup', post).then(function (res){
              return res;
          })
        } else {
          return $http.post('/api/v1/posts/'+ post.id +'/votedown', post).then(function (res){
            return res;
          })
        }
      }
      
      function addPost(post){
        post.votes = 0;
        post.user_id = 2;
        return $http.post('/api/v1/posts/add', post).then(function (newPost){
          newPost.data.username = "Lincoln the awesome";
          newPost.data.comments = [];
          _posts.push(newPost.data);
          return _posts;
        });
      }

      function getPosts() {
        return $http.get('/api/v1/posts').then(function (res){
          _posts = res.data;
          return _posts;
        });
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
