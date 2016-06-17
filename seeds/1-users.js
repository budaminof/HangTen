
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),

    knex('users').insert({
      email: 'bud@example.com',
      username: 'Bud',
      password:'$2a$10$SyMaBzAAHO3dwU9LUiEu4OmwXAgMqnnzgfgGJEJ777EOXEPHt7e6'
        }),
    knex('users').insert({
      email: 'lin@example.com',
      username: 'Lincoln',
      password:'$2a$10$SyMaBzAAHO3dwU9LUiEu4OmwXAgMqnnzgfgGJEJ777EOXEPHt7e6'
        }),
    knex('users').insert({
      email: 'dave@example.com',
      username: 'David',
      password:'$2a$10$SyMaBzAAHO3dwU9LUiEu4OmwXAgMqnnzgfgGJEJ777EOXEPHt7e6'
        })
  );
};
