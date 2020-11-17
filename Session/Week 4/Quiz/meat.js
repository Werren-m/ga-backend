class Meat{
    constructor(slot,type,weight){
        this.slot = slot;
        this.type = type;
        this.weight = weight;
    }
}

class Beef extends Meat{
    constructor(slot,type,weight){
        super(slot,type,weight);
        this.status = "uncooked";
    }            
}

class Mutton extends Meat{
    constructor(slot,type,weight){
        super(slot,type,weight);
        this.status = "uncooked";
    }            
}

module.exports = {
    Beef,Mutton
}