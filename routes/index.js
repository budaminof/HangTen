var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.DB_ENV || 'development']);

router.get('/api/v1/posts', function(req, res, next) {
  knex('posts').then(function(data){
    return res.json(data);
  })

});

router.get('*', function (req,res,next){
  res.sendfile('index.html');
})

module.exports = router;
