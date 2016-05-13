const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile')[process.env.DB_ENV || 'development']);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/signup', function (req, res, next) {
  const errors = []

  if (!req.body.email || !req.body.email.trim()) errors.push("Email can't be blank");
  if (!req.body.username || !req.body.username.trim()) errors.push("Username can't be blank");
  if (!req.body.password || !req.body.password.trim()) errors.push("Password can't be blank");

  if (errors.length) {
    res.status(422).json({
      errors: errors
    })
  } else {
    knex('users')
    .whereRaw('lower(email) = ?', req.body.email.toLowerCase())
    .count()
    .first()
    .then(function (result) {
      if(result.count === "0") {
        const saltRounds = 4
        const passwordHash = bcrypt.hashSync(req.body.password, saltRounds);

        knex('users')
          .insert({
            email: req.body.email,
            username: req.body.username,
            password: passwordHash
          })
          .returning('*')
          .then(function (users) {
            const user = users[0];
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
            res.json({
              id: user.id,
              username: user.username,
              email: user.email,
              token: token
            })
          })
      } else {
        res.status(422).json({
          errors: ['Email is already in the database!']
        })
      }
    })
  }

})

module.exports = router;