//Process ARGV

// const data = process.argv;
// const command = process.argv[2];
// const params = process.argv.slice(3);
// console.log(data);
// console.log(command);
// console.log(params);

//File System
const fs = require('fs');
const { parse } = require('path');
const jsonData = fs.readFileSync('./data.json','utf8');
const parseData = JSON.parse(jsonData);
console.log(parseData);

class FruitTree{
    constructor(id,type,age,totalFruits,matureAge,stopProducing){
        this.id = id;
        this.type = type;
        this.age = age;
        this.totalFruits = totalFruits;
        this.matureAge = matureAge;
        this.stopProducing = stopProducing;
    }
}

class AppleTree extends FruitTree{
    constructor(id,type,age,totalFruits,matureAge,stopProducing){
        super(id,type,age,totalFruits,matureAge,stopProducing)
    }
}
class PearTree extends FruitTree{
    constructor(id,type,age,totalFruits,matureAge,stopProducing){
        super(id,type,age,totalFruits,matureAge,stopProducing)
    }
}
class OtherTree extends FruitTree{
    constructor(id,type,age,totalFruits,matureAge,stopProducing){
        super(id,type,age,totalFruits,matureAge,stopProducing)
    }
}

