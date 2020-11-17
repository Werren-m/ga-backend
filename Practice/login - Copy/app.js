const express = require('express');
const app = express();
require('dotenv').config();

const router = require('./routes');

const PORT = process.env.PORT || 3000;



// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(router);


app.listen(PORT,() => {
    console.log('Server listening on port ' + PORT);
})