// INTRO OOP

class Human{
    // Properties
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    }
    work(){
        console.log(`I am working as ... `)
    }
    growUp(){
        this.age += 1;
    }
}

// let jack = new Human("Jack",24);
// jack.work();
// jack.growUp();
// jack.introduce();

// Inheritance

class Actor extends Human{
    constructor(name,age,programming){
        super(name,age);
        this.programming = programming;
    }
    introBro(){
        console.log(`Hello my name is ${this.name} and thats all`);
    }
    intro(){
        super.introduce();
        console.log(this.programming);
    }    

}

let Brad = new Actor("Brad",55,["JS","C++"]);
Brad.intro();