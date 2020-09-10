// 4 PILLARS IN OOP
/**
 * 1.   Inheritance
 * 2.   Polymorphism    => Override & Overload
 * 3.   Encapsulation   => Access modifier(public protected private), setter & getter
 * 4.   Abstraction
 */

class FruitTree{
    constructor(type,age,fruits,totalFruits,matureAge,stopProducing){
        this._type = type;
        this._age = age;
        this._fruits = fruits;
        this._totalFruits = totalFruits;
        this._matureAge = matureAge;
        this._stopProducing = stopProducing;
    }
    get type(){
        return this._type;
    }
    get age(){
        return this._age;
    }
    get fruits(){
        return this._fruits;
    }
    get totalFruits(){
        return this._totalFruits;
    }
    get matureAge(){
        return this._matureAge;
    }
    get stopProducing(){
        return this._stopProducing;
    }

    set setType(type){
        this._type = type;
    }
    set setAge(age){
        this._age = age;
    }  
    set setFruits(fruits){
        this._fruits = fruits;
    }  
    set setTotalFruits(totalFruits){
        this._totalFruits = totalFruits;
    }  
    set setMatureAge(matureAge){
        this._matureAge = matureAge;
    }  
    set setStopProducing(stopProducing){
        this._stopProducing = stopProducing;
    }  
    growUp(){
        this._age += 1;
        if(this.age >= this.matureAge && this.age < this.stopProducing){
            this.produceFruits();
        }
    }
    produceFruits(){
        this.setFruits = this._fruits + 1;
        this.setTotalFruits = this._totalFruits + 1;
    }
    status(){
        return this;
    }
}

class AppleTree extends FruitTree{
    constructor(type,age,fruits,totalFruits,matureAge,stopProducing){
        super(type,age,fruits,totalFruits,matureAge,stopProducing)
    }
}

let Apple = new AppleTree("Apple",1,3,10,4,10);
console.log(Apple.status());
Apple.growUp();
Apple.growUp();
Apple.growUp();
Apple.growUp();
Apple.growUp();
Apple.growUp();
Apple.growUp();
console.log(Apple.status());
