const { help } = require('./controller/ProductController');
const controller = require('./controller/ProductController')
const command = process.argv[2];
const param = process.argv.slice(3);

switch(command){
    case "help":
        // let controlList = new controller().help;
        // console.log(controlList)
        // help(controller);
        // console.log(Object.getOwnPropertyNames(controller.prototype).filter(x => x !== 'constructor'));        
        break;
    
    case "list":
        controller.list();
        break;
    
    case "add":
        controller.add(param);
        break;

    case "update":
        controller.update(param);
        break;
    
    case "delete":
        controller.delete(param);
        break;

    case "complete":
        controller.complete(param);
        break;

    case "uncomplete":
        controller.uncomplete(param)
        break;

    default:
        console.log("Please input a valid command!!");
        break;
}