### README

##### Playing around with Angular.


[Deploying with Heroku](https://morning-bayou-96723.herokuapp.com/)


Entity-Relationship diagram:

![](/db.jpg)

1. fork, clone.
1. npm install.
1. create your one db
1. knex  migrate:latest
1. knex seed:run
1. create .env file

with those keys:
* DB_ENV=development
* DATABASE_URL= ^^ your databse url ^^^
* JWT_SECRET= ^^ your secret key ^^^

Run nodmeon.
