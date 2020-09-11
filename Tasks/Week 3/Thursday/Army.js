class Army{
    constructor(name,type,level){
        this.name = name;
        this.type = type;
        this.level = level || 1;
    }
    talk(){
        console.log(`Hello, my name is ${this.name}, I am a ${this.type} and I am level ${this.level}`);
    }
    training(){
        if(this.level < 10){
            this.level += Math.ceil(Math.random() * 3);
        }
    }
}

class Knight extends Army{
    super(name,type,level){
        this.name = name;
        this.type = type;
        this.level = level;
    }
    talk(){
        console.log(`I'm good with sword, I'm level ${this.level} and my name is ${this.name}`);
    }    
}

class Archer extends Army{
    super(name,type,level){
        this.name = name;
        this.type = type;
        this.level = level;
    }
    talk(){
        console.log(`I'm good with bow, I'm level ${this.level} and my name is ${this.name}`);
    }    
}

class Spearman extends Army{
    super(name,type,level){
        this.name = name;
        this.type = type;
        this.level = level;
    }
    talk(){
        console.log(`I'm good with spear, I'm level ${this.level} and my name is ${this.name}`);
    }    
}


module.exports = {
    Spearman,Knight,Archer
}
