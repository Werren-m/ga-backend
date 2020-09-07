//ES5 - Variable
// console.log(x);
// var x = 10;

// hello();
// function hello(){
//     console.log("Hello")
// }

//ES6 - Variable

//Tidak bisa di redeclare
// let x = 15;
// let x = 10;
// console.log(x);
// function hello(){
//     let x = 15;
//     console.log(x)
// }
// hello();
// console.log(x)
// let data = {
//     id : 1,
//     name : "Files"
// }
// const a = 100;
//Tidak bisa di initialize ulang
// a = 150;
// const pi = 3.14;
// console.log(a);

// const student = {
//     id : 1,
//     name : "Mantaph"
// }
// student.status = true;
// student["sayHello"] = function(){
//     console.log("Say Hello.")
// }
// console.log(student);
// student.sayHello();

//ES5 - Function
//Function Declaration
// function sortNumber(){
//     console.log("Ini Sort Number");
//     return 1;
// }
// console.log(sortNumber());
//Function Expression
// const sortLetter = function(){
//     console.log("Ini Sort Letter");
// }

//ES6 - Function
//Arrow Function 
// const calculate = () => console.log("Calculate");

// const calculate = angka => angka * 10;

// const getData = () => {
//     let hasil = calculate(10);
//     console.log("Ini get data." , hasil)
// }
// getData();
// console.log(calculate(10));
// calculate();

//Import - Export
//ES 5
/**
 * require
 * module.exports
 */
//ES 6
/**
 * import
 * export
 */

//Class
//Object Literal
// const human = {
//     name: "Max",
//     age: 17
// }
// const human1 = {
//     name: "Jane",
//     age: 18
// }
// console.log(human);
// console.log(human1);

//Class -> instance of 
// Penamaan class menggunakan Pascal Case
// class Human {
//     //Property -> utk membuat property dalam class butuh constructor
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     //Method
//     speak(){
//         console.log(`Hi, my name is ${this.name} and my age is ${this.age} years old.`)
//     }
//     mentionThis(){
//         console.log(this);
//     }
//     cook(){
//         console.log("Sedang masak");
//     }
// }
//person merupakan Instance Of class Human
// let max = new Human("Max", 17);
// console.log(max.name)
// console.log(max.age)
// max.speak();
// max.mentionThis();
// max.cook();
// let jane = new Human("Jane", 18);
// console.log(max);
// console.log(jane);

// class Cookie {
//     constructor(type, price, ingredients) {
//         this.type = type;
//         this.price = price;
//         this.ingredients = ingredients;
//     }
// }

// let chocolate = new Cookie('chocolate', 10000, ["sugar", "flour", "cocoa"])
// let brownies = new Cookie('brownies', 15000, ["cocoa", "eggs"])
// console.log(chocolate);
// console.log(brownies);

// class TodoController {
//     static getData(){

//     }
//     static addData(){

//     }
//     static deleteData(){

//     }
//     static updateData(){

//     }
//     static findData(){

//     }
// }

//Looping dengan for biasa -> ES5
const cookies = ["chocolate","brownies","sugar"]

for(let i=0; i<cookies.length; i++){
    console.log(cookies[i]);
}
const numbers = [1,2,3]
//Looping dengan high order function -> ES6

cookies.forEach(el => console.log(el))

const newNumbers = numbers.map(el => el*el)

console.log(newNumbers)