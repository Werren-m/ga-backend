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

    static message(msg){
        console.log(msg);
    }

}

module.exports = View;