### README

##### Playing around with Angular.


[Deploying with Heroku](https://hangten.herokuapp.com/)


Entity-Relationship diagram:

![](/db.jpg)

If you want to try and run this by yourself (I take no responsibility if you do), then:

1. fork, clone.
1. npm install.
1. createdb
1. knex  migrate:latest
1. knex seed:run
1. create .env file

with those keys:
* DB_ENV=development
* DATABASE_URL= <your database url>
* JWT_SECRET= <your made-up secret key>

Run nodmeon.
