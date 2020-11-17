const pool = require('./config/connection');

const createTableQuery = 
    `CREATE TABLE IF NOT EXISTS TASKS(
        ID SERIAL PRIMARY KEY ,
        TASK VARCHAR(50),
        STATUS VARCHAR(50),
        TAG VARCHAR(50),
        CREATED_AT VARCHAR(50),
        COMPLETED_AT VARCHAR(50)
    );
`;

pool.query(createTableQuery, (err,data) => {
    if(err){
        throw err;
    }else{
        console.log("Table TASKS created successfully!!");
        pool.end();
    }
});


