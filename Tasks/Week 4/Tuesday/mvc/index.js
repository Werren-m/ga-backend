const ProductController = require("./controller/ProductController");

const command = process.argv[2];
const params = process.argv.slice[3];
const ProductControllers = require('./controller/ProductController.js')


switch(command){
    case "list":
        // console.log("list");
        ProductControllers.list();
        break;
    case "add":
        ProductControllers.add(params);
        // console.log("Add");
        break;
    case "delete":
        ProductControllers.delete();
        // console.log("Delete");
        break;
    case "update":
        ProductControllers.update();
        // console.log("Update");
        break;
    default:
        console.log("Please input a legit command");
        break;
}


// Flow MVC 
// 1. User input terminal ke index -> index.js
// 2. Logic flow: index -> Controller -> Model -> Controller -> View