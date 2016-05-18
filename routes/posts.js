var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.DB_ENV || 'development']);
const jwt = require('jsonwebtoken');

router.get('/', function(req, res, next) {
  var _posts = [];

   knex('posts')
  .innerJoin('users', 'posts.user_id', 'users.user_id')
  .select('posts.title', 'posts.description', 'posts.votes', 'posts.image_url', 'posts.create_at', 'users.username', 'posts.post_id', 'posts.user_id')
  .then(function(data){

    data.forEach(function (item){
      _posts.push({
        post_id: item.post_id,
        title: item.title,
        description: item.description,
        image_url: item.image_url,
        votes: item.votes,
        username: item.username,
        create_at: item.create_at,
        user_id: item.user_id,
        comments: []
      })
    })

    return knex('comments')
    .innerJoin('users', 'comments.user_id', 'users.user_id')
    .select('users.username', 'comments.comment', 'comments.post_id', 'comments.create_at', 'comments.comment_id', 'comments.user_id')
    })
    .then(function (dataComments) {

      _posts.forEach(function (postItem){
        dataComments.forEach(function (commentItem){
          if(postItem.post_id === commentItem.post_id){
            postItem.comments.push(commentItem)
          }
        })
      })
      res.json(_posts);
    })

});

router.post('/add', authorization, function(req, res, next) {
  knex('posts')
  .insert({
    user_id: req.body.user_id,
    title: req.body.title,
    description: req.body.description,
    votes: req.body.votes,
    image_url: req.body.image_url
  })
  .returning('*')
  .then(function(newPost){
    return res.json(newPost[0]);
  })
});

router.post('/:postId/voteup', authorization, function(req, res, next) {
  knex('posts')
  .where({post_id: req.params.postId})
  .increment('votes', 1)
  .returning('*')
  .then(function(post){
    return res.json(post[0]);
  })
});

router.post('/:postId/votedown', authorization, function(req, res, next) {
  knex('posts')
  .where({post_id: req.params.postId})
  .decrement('votes', 1)
  .returning('*')
  .then(function(post){
    return res.json(post[0]);
  })
});

router.post('/:postId/comments/add', authorization, function(req, res, next) {
  knex('comments')
  .insert({
    user_id: req.body.user_id,
    comment: req.body.comment,
    post_id: req.body.post_id
  })
  .returning('*')
  .then(function(comment){
    return res.json(comment[0]);
  })
});

router.delete('/:postId', authorization, function(req, res, next) {
  if(req.user.user_id){
    knex('posts')
    .where({
      post_id: req.params.postId,
      user_id: req.user.user_id
    })
    .first()
    .del()
    .then(function(response){
      res.status(200).json({
        msg: ['success delete']
      });
      return
    })
  } else {
    res.status(403).json({
      error: ["You can't erase this post, its not yours!"]
    })
  }
});

router.delete('/:postId/comments/:commentId', authorization, function(req, res, next) {
  if(req.user.user_id){
    knex('comments')
    .where({
      comment_id: req.params.commentId,
      user_id: req.user.user_id
    })
    .first()
    .del()
    .then(function(response){
      res.status(200).json({
        msg: ['success delete comment']
      });
      return
    })
  } else {
    res.status(403).json({
      error: ["You can't erase this comment, its not yours!"]
    })
  }
});

function authorization (req, res, next) {
  if(req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    knex('users')
    .where({user_id: payload.user_id})
    .then(function(user){
      if(user.length === 0){
        res.status(403).json({
          error: ["Authorization error!"]
        })
      } else {
        req.user = user[0];
        next();
      }
    })
  } else {
    res.status(403).json({
      error: ["Authorization error!"]
    })
  }
}

module.exports = router;
