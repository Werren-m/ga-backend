const fs = require('fs');

class Product{
    constructor(id,name,category,status,createdAt){
        this.id = id;
        this.name = name;
        this.category = category;
        this.status = status;
        this.createdAt = createdAt;
    }

    static list(){
        const data = fs.readFileSync('./data.json','utf8');
        // const parseData = JSON.parseData(data);

        let tempData = [];
        return data;
    }
    static add(params){
        // console.log("Add")
        const products = this.list();
        const name = params[0];

        const tempObject = {
            id : 7,
            name: name,
            category: "hardware",
            status: true,
            createdAt: new Date()
        };
    }
    static delete(){
        console.log("Delete")
    }
    static update(){
        console.log("Update")
    }
}

module.exports = Product;