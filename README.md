# E-Commerce Backend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the backend of an e-commerce website consisting of a database with categories, tags and products and a routing API built with express.js. There is no front end for this application, instead, the user is expected to use Insomnia to test out the routes constructed. Categories can have many products, products can have many tags and tags can have many products.

## Getting Started

* First, make sure you have a terminal viewer installed (such as Git Bash).
* Next, install [Node.js](https://nodejs.org/).
* Then, install [MySQL](https://www.mysql.com/) and follow their instructions VERY carefully.
* type in `mysql -u root -p`
* Enter the password as `password`
* Run `source schema.sql` in the command line
* Open a NEW terminal and navigate to the root folder
* Run `npm install` and wait for node_modules to finish installing
* Change the .env.EXAMPLE to .env and update the DB_USER to `root` and DB_PW to `password`
* (optional) run `npm run seed` to seed the database with example data
* Run `node server.js`
* Open insomnia to test the routes!


## Deployed Link

* N/A (see Getting Started section)

## Demo

[Demo video showing insomnia testing routes](https://watch.screencastify.com/v/AURDGYnKx6E7QS97eR7R)

## Screenshot

![Screenshot of testing with insomnia](screenshots/insomnia-test.png)

## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/)
* [MySQL2 package](https://www.npmjs.com/package/mysql2)
* [Insomnia]()


## Authors

* **Emily Dorgan** 

- [Link to Portfolio Site](https://emdorgan.github.io/updated-portfolio/)
- [Link to Github](https://github.com/emdorgan)
- [Link to LinkedIn](https://www.linkedin.com/in/emily-dorgan/)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)