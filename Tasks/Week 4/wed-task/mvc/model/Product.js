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

    static help(){
        const arr = [
            'node index.js',
            'node index.js help',
            'node index.js list',
            'node index.js add <content>',
            'node index.js update <id> <task>',
            'node index.js delete <id>',
            'node index.js complete <id>',
            'node index.js uncomplete <id>'
        ]
        
        return arr;
    }

    static list(cb){
        // const data = this.getJSON();
        fs.readFileSync('./data.json','utf8',(err,data) =>{
            if(err){
                cb(err,null);
            }else{
                const parseData = JSON.parse(data);
                let tempData = [];
                parseData.forEach(el => {
                    const {id, task, status, tag, created_at, completed_at} = el;
                    tempData.push(new Product(id,task,status,tag,created_at,completed_at));
                });
            }cb(null, parseData);
        })
    }

    static add(param){
        const tasks = this.list();
        const [task,status,tag] = param;

        const tempProduct = {
            id: this.getId(),
            task: task,
            status: (status === "true"),
            tag: tag || [],
            created_at: new Date(),
            completed_at: null
        }
        tasks.push(tempProduct);
        this.save(tasks);
        return `${task} has been added successfully!!`;
    }

    static delete(id){
        const tasks = this.list();
        let task = "";
        tasks.forEach(el => {
            if(el.id === Number(id)){
                task = el.task;
            }
        })
        const filteredTasks = tasks.filter(el => el.id !== Number(id));
        if(filteredTasks.length === tasks.length){
            return 'ID not found!!'
        }else{
            this.save(filteredTasks);
            return `${task} has been deleted succesfully!!`;
        }
    }

    static complete(id){
        const tasks = this.list();
        let task = "";
        tasks.forEach(el => {
            if(el.id === Number(id)){
                el.completed_at = new Date();
                el.status = true;
                task = el.task;
            }
        })
        this.save(tasks);
        if(task.length === 0){
            return `Invalid ID!!`;
        }else{
            return `${task} has been completed!!`;
        }
    }

    static uncomplete(id){
        const tasks = this.list();
        let task = "";
        tasks.forEach(el => {
            if(el.id === Number(id)){
                el.completed_at = null;
                el.status = false;
                task = el.task;
            }
        })
        this.save(tasks);
        if(task.length === 0){
            return `Invalid ID!!`;
        }else{
            return `${task} has been uncompleted!!`;
        }
    }

    static update(param){
        const tasks = this.list();
        const tasksClone = this.list();
        const [id, task] = param;
        let count = 0;
        let temp="";
        tasks.forEach(el =>{
            if(el.id == Number(id)){
                temp = el.task;
                el.task = task;
            }
        })
        this.save(tasks);
        if(tasks == tasksClone){
            return `Invalid ID`
        }else{
            return `${temp} has been updated to ${task}`
        }
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