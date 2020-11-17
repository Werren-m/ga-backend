const {encryptPwd} = require('./helpers/bcrypt');
const bcrypt = require('bcrypt');
require('dotenv')

console.log(process.env);

// console.log(encryptPwd("YA"));