class Cat{
    constructor(tiredness,hunger,loneliness,happiness){
        this.tiredness = tiredness;
        this.hunger = hunger;
        this.loneliness = loneliness;
        this.happiness = happiness;
    }

    feed(x){
        this.hunger -= Math.ceil(Math.random() * x);
    }
    sleep(x){
        this.tiredness -= Math.ceil(Math.random() * x);
    }
    pet(x){
        this.happiness += Math.ceil(Math.random() * x);
        this.loneliness -= Math.ceil(Math.random() * this.loneliness);
    }
    status(){
        if(this.tiredness > 4){
            console.log("Paws is tired");
        }else{
            console.log("Paws is energetic!!")
        }

        if(this.loneliness > 4){
            console.log("Paws is lonely");
        }

        if(this.hunger > 4){
            console.log("Paws is hungry!!");
        }else{
            console.log("Paws is full!!")
        }
        if(this.happiness > 4){
            console.log("Paws is happy!!");
        }else{
            console.log("Paws is angry!!!!")
        }
    }
}

module.exports = Cat;