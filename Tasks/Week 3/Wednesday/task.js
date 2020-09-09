// // INTRO OOP

// class Human{
//     // Properties
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     introduce(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
//     }
//     work(){
//         console.log(`I am working as ... `)
//     }
//     growUp(){
//         this.age += 1;
//     }
// }

// // let jack = new Human("Jack",24);
// // jack.work();
// // jack.growUp();
// // jack.introduce();

// // Inheritance

// class Actor extends Human{
//     constructor(name,age,programming){
//         super(name,age);
//         this.programming = programming;
//     }
//     introBro(){
//         console.log(`Hello my name is ${this.name} and thats all`);
//     }
//     intro(){
//         super.introduce();
//         console.log(this.programming);
//     }    

// }

// let Brad = new Actor("Brad",55,["JS","C++"]);
// Brad.intro();

class Student{
    constructor(name,age,dob,gender,stuid,hobbies){
        this.name = name;
        this.age = age;
        this.dob = dob;
        this.gender = gender;
        this.stuid = stuid;
        this.hobbies = hobbies || [];
    }    
    set setName(name){
        this.name = name;
    }
    set setAge(age){
        this.age = age;
    }
    set setDob(dob){
        this.dob = dob;
    }
    set setGender(gender){
        this.gender = gender;
    }
    set addHobbies(hobbies){
        this.hobbies.push(hobbies);
    }
    get getData(){
        return this;
    }
    removeHobby(hobby){
        for(let i=0; i<this.hobbies.length; i++){
            if(this.hobbies[i] === hobby){
                this.hobbies.splice(i,1);
            }
        }
    }
}

let Jak = new Student("Jak",24,"24-08-95","Male","Test00001",["Basketball","Music"]);