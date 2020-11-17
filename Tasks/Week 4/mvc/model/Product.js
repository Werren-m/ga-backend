const fs = require('fs');
const { stringify } = require('querystring');

class Product{
    constructor(id,task,status,tag,created_at,completed_at){
        this.id = id;
        this.task = task;
        this.status = status;
        this.tag = tag;
        this.created_at = created_at;
        this.completed_at = completed_at;
    }

    static list(cb){
        // const data = this.getJSON();
        // let tempData = [];

        // data.forEach(el => {
        //     const {id, task, status, tag, created_at, completed_at} = el;
        //     tempData.push(new Product(id,task,status,tag,created_at,completed_at));
        // })
        // return tempData;

        fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err) {
                cb(err, null);
            }
            else {
                const parseData = JSON.parse(data);

                let tempData = [];
                parseData.forEach(element => {
                    const { id, task, status, tag, created_at,completed_at } = element;
                    tempData.push(new Product(id, task, status, tag, new Date(created_at), new Date(completed_at)));
                });
                cb(null, tempData);
            }
        })
    }

    static add(param,cb){
        // const tasks = this.list();
        this.list((err, data) => {
            if(err){

                cb(err,null);

            }else{
                
                const [task,status,tag] = param;
                const nextId = data[data.length - 1].id + 1;

                const tempProduct = {
                id: nextId,
                task: task,
                status: (status === "true"),
                tag: tag || [],
                created_at: new Date(),
                completed_at: null
            }
            data.push(tempProduct);
            this.save(data);
            cb(null,`${tempProduct.task} has been added successfully!!`);
            }
        });
    }

    static delete(id,cb){
        // const tasks = this.list();
        this.list((err,data) => {
            if(err){
                cb(err,null);
            }else{
                let task = "";
                data.forEach(el => {
                    if(el.id === Number(id)){
                        task = el.task;
                     }
                })
                const filteredTasks = data.filter(el => el.id !== Number(id));
                if(filteredTasks.length === data.length){
                    cb(null,'ID not found!!'); 
                }else{
                    this.save(filteredTasks);
                    cb(null,`${task} has been deleted succesfully!!`);
                }
            }
        })
    }

    static complete(id,cb){
        // const tasks = this.list();
        this.list((err,data) => {
            if(err){
                cb(err,null);
            }else{
                let task = "";
                data.forEach(el => {
                    if(el.id === Number(id)){
                        el.completed_at = new Date();
                        el.status = true;
                        task = el.task;
                    }
                })
                this.save(data);
                if(task.length === 0){
                    cb(null,`Invalid ID!!`);
                }else{
                    cb(null,`${task} has been completed!!`);
                }
            }
        })
                
    }

    static uncomplete(id,cb){
        // const tasks = this.list();
        this.list((err,data) => {
            if(err){
                cb(err);
            }else{
                let task = "";
                data.forEach(el => {
                    if(el.id === Number(id)){
                    el.completed_at = null;
                    el.status = false;
                    task = el.task;
                }
                })
                this.save(data);
                if(task.length === 0){
                    cb(null,`Invalid ID!!`);
                }else{
                    cb(null,`${task} has been uncompleted!!`);
                }

            }
        })
        
    }

    static update(param,cb){
        this.list((err,data) => {
            if(err){
                cb(err,null);
            }else{
                const tasksClone = data;
                const [id, task] = param;
                let count = 0;
                let temp="";
                data.forEach(el =>{
                    if(el.id == Number(id)){
                        temp = el.task;
                        el.task = task;
                        count++
                    }
                })
                console.log(count);
                this.save(data);
                if(count === 0){
                    cb(null,`Invalid ID`)
                }else{
                    cb(null,`${temp} has been updated to ${task}`)
                }
            }
        })
    }

    static getId(){
        let data = this.getJSON();
        return (data[data.length-1].id + 1);
    }

    static getJSON(){
        return (JSON.parse(fs.readFileSync('./data.json','utf8')));       
    }

    static save(tasks){
        const newTasks = JSON.stringify(tasks,null,2);
        fs.writeFileSync('./data.json',newTasks);
    }

}

module.exports = Product;