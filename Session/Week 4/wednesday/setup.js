const pool = require('./config/connection.js');

const productsTableSql = `
CREATE TABLE TESTING(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    category VARCHAR(50),
    status VARCHAR(50),
    createdAt VARCHAR(100)
);
`;

pool.query(productsTableSql, (err,data) => {
    if(err){
        throw err;
    }else{
        console.log(`Table "products" created successfully!`);
        pool.end();
    }
})