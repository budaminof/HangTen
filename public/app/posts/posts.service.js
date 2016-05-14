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
        submitComment: submitComment,
        sort: {criteria: "-date"},
        search: {query: ""},
        updateVote: updateVote,
        deletePost: deletePost,
        deleteComment: deleteComment
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

      function submitComment(comment) {
        return $http.post('/api/v1/posts/'+ comment.post_id +'/comments/add', comment)
          .then(function (res){
             comment.username = "friend";
             comment.create_at = res.data.create_at;
             comment.comment_id = res.data.comment_id;

             _posts.forEach(function (post){
               if (post.post_id === comment.post_id){
                 post.comments.push(comment)
               }
             })

            return _posts
          })
      }

      function updateVote (post, direction) {
        if(direction == 'up'){
          return $http.post('/api/v1/posts/'+ post.post_id +'/voteup', post).then(function (res){
              _posts.forEach(function (item){
                if (item.post_id === post.post_id) {
                  item.votes ++
                }
              })
              return _posts;
          })
        }
        else {
          return $http.post('/api/v1/posts/'+ post.post_id +'/votedown', post).then(function (res){
            _posts.forEach(function (item){
              if (item.post_id === post.post_id) {
                item.votes --
              }
            })
            return _posts;
          })
        }
      }

      function deletePost (post) {
        return $http.delete('/api/v1/posts/' + post.post_id)
        .then(function (res) {
          var target = _posts.indexOf(post);
          _posts.splice(target, 1);
          return _posts;
        })
      }

      function deleteComment (comment) {
        return $http.delete('/api/v1/posts/comments/' + comment.comment_id)
        .then(function (res){
          _posts.forEach(function (item){
            if (item.post_id === comment.post_id) {
              var target = item.comments.indexOf(comment);
              item.comments.splice(target, 1)
            }
          })
          return _posts
        })
      }

    }

})();
