const pool = require('./config/connection');

const createTableQuery = `
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    task VARCHAR(50),
    status boolean,
    tag VARCHAR(50),
    created_at DATE,
    completed_at DATE
);
`;

// pool.query(createTableQuery,(err,result) => {
//     if(err){
//         throw err;
//     }else{
//         console.log("tasks successfully created!!");
//         pool.end();
//     }
// });


const insertDataQuery = `
INSERT INTO tasks (id,task,status,tag,created_at,completed_at)
VALUES (1,'Belajar Node.js',true,null,'2020-04-07','2020-04-07'),
        (2,'Belajar Javascript',false,null,'2020-04-07',null),
        (3,'Belajar C++',true,null,'2020-04-07','2020-04-07'),
        (4,'Belajar Java',false,null,'2020-04-07',null)
`;

pool.query(insertDataQuery,(err,data) => {
    if(err){
        throw err;
    }else{
        console.log("Data inserted successfully!!");
    }
})





/**
 * [
    {
     "id": 1,
     "task": "Belajar Node.js",
     "status": true,
     "tag": [],
     "created_at": "2020-04-07T14:31:44.338Z",
     "completed_at": "2020-04-07T14:31:44.338Z"
   },
   {
     "id": 2,
     "task": "Belajar Javascript",
     "status": false,
     "tag": [],
     "created_at": "2020-04-07T14:31:44.338Z",
     "completed_at": null
   },
   {
     "id": 3,
     "task": "Belajar C++",
     "status": true,
     "tag": [],
     "created_at": "2020-04-07T14:31:44.338Z",
     "completed_at": "2020-04-07T14:31:44.338Z"
   },
   {
     "id": 4,
     "task": "Belajar Java",
     "status": true,
     "tag": [],
     "created_at": "2020-04-07T14:31:44.338Z",
     "completed_at": "2020-04-07T14:31:44.338Z"
   },
   {
     "id": 5,
     "task": "Belajar C#",
     "status": false,
     "tag": [],
     "created_at": "2020-04-07T14:31:44.338Z",
     "completed_at": null
   } 
 ]
 */