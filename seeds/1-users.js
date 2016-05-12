
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),

    knex('users').insert({
      email: 'superadmin@example.com',
      username: 'superadmin',
      password:'$2a$10$SyMaBzAAHO3dwU9LUiEu4OmwXAgMqnnzgfgGJEJ777EOXEPHt7e6',
      salt: 12868
    }),
    knex('users').insert({
      email: 'some@example.com',
      username: 'some',
      password:'$2a$10$SyMaBzAAHO3dwU9LUiEu4OmwXAgMqnnzgfgGJEJ777EOXEPHt7e6',
      salt: 12868
    }),
    knex('users').insert({
      email: 'friend@example.com',
      username: 'friend',
      password:'$2a$10$SyMaBzAAHO3dwU9LUiEu4OmwXAgMqnnzgfgGJEJ777EOXEPHt7e6',
      salt: 12868
    })
  );
};
