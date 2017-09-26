# Backend

First, install mysql (follow instructions at https://gist.github.com/nrollr/3f57fc15ded7dddddcc4e82fe137b58e). Login with `mysql -u root -p` and type in the password you set in the instructions. Also save the password in your environemnt as MYSQL_PASSWORD (as in put the following line in your ~/.bashrc: `export MYSQL_PASSWORD='blah'`. Then create two databases called `atlargetest` and `atlargeprod`. You can do this with `CREATE DATABASE atlargetest;`. In the future this should be automated. You can then run `npm seed` (or `yarn seed`) to seed the database. This essentially runs `schema.js`, which executes some `CREATE TABLE` queries. Currently to change the schema you need to drop all the tables and reseed - in the future migrations will need to be handled more intelligently.

Finally, you can run `npm start` or `yarn start`, which will start a dev database that watches for file changes and restarts on change. 