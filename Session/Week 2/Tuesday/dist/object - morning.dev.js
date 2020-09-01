"use strict";

//Function
// function greet(name){
//     var text = "Good morning, ";
//     var textGreet = text + name;
//     console.log(textGreet);
// }
// console.log(greet("jack"))
// function greets(name){
//     var text = "Good morning, ";
//     var textGreet = text + name;
//     return textGreet;
// }
// greet("jack");
// var temp = greets("jake");
// console.log(temp)
// function nextGreet(greetings){
//     var salam = greets("clara.");
//     var combineGreet = salam + greetings;
//     return combineGreet;
// }
// console.log(nextGreet("How are you?"));
//OBJECT
//Kumpulan nilai yang memiliki key.
// var items = [
//     ["Wallet","Bag","Rucksak"],
//     ["Lipstick","Foundation","Eyeliner"],
//     ["T-shirt","shirt","pants"]
// ]
//Array in object
var items = {
  storage: ["Wallet", "Bag", "Rucksak"],
  makeup: ["Lipstick", "Foundation", "Eyeliner"],
  clothes: ["T-shirt", "shirt", "pants"]
};
var mahasiswa = {
  nama: "Jack",
  ipk: 3.25,
  ableToCode: true,
  sayHello: function sayHello() {
    return "Hello, my name is " + this.nama + ".";
  },
  computeMath: function computeMath(angka) {
    return Math.pow(angka, 3);
  },
  mentionThis: function mentionThis() {
    console.log("".concat(this.nama, " has GPA : ").concat(this.ipk));
  }
}; // console.log(mahasiswa.nama)
// console.log(mahasiswa["ipk"])
// console.log(mahasiswa.ableToCode)
// console.log(mahasiswa.sayHello())
// console.log(mahasiswa.computeMath(5))
// mahasiswa.mentionThis()
//Array of Objects

var storage = [{
  name: "WD Caviar Blue",
  size: 512
}, {
  name: "WD Black",
  size: 512
}, {
  name: "Seagate NVME",
  size: 256
}];
console.log(storage[0]["name"]); //Object in object -> Nested Object

var fruits = {
  type: {
    name: "Apple",
    color: "Red"
  },
  price: {
    city: "Jakarta",
    value: 100000
  }
};
console.log(fruits.type.name);

function createObject(name, ipk) {
  var temp = {
    name: name,
    ipk: ipk
  }; // temp.name = name;
  // temp.ipk = ipk;

  return temp;
}

var siswa = createObject("cindy", 3.5);
console.log(siswa);