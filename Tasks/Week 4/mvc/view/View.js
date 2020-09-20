class View{
    static list(param){
        param.forEach(element => {
    if(element.status === true){
        console.log(`[X] ${element.task}`);
    }else{
        console.log(`[] ${element.task}`);
    }
    })
    }

    static help(){
        let func = ["node todo.js","node todo.js help","node todo.js list","node todo.js add <content>","node todo.js update <id> <task>","node todo.js delete <id","node todo.js complete <id>","node todo.js uncomplete <id>"];

        func.forEach(el =>{
            console.log(el);
        })
    }


    static message(msg){
        console.log(msg);
    }

}

module.exports = View;