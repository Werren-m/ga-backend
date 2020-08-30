const products = require('./products.json');
const users = require('./users.json');

/*
  Code Challenge #3

  Your goals to create these endpoint
    
    /products
      This will show all products on products.json as JSON Response

    /products/available
      This will show the products which its stock more than 0 as JSON Response

    /users
      This will show the users data inside the users.json,
      But don't show the password!

  */

const http = require('http');

/* Code Here */