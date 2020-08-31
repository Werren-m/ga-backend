"use strict";

//Looping 
//for
//while
//do ... while
// for(let i=0; i<5; i++){
//     console.log("Hello World")
// }
// i=0 True -> Hello World 
// i=1 True -> Hello World 
//             Hello World
// i=2 True -> Hello World 
//             Hello World
//             Hello World
// i=3 True -> Hello World 
//             Hello World
//             Hello World    
//             Hello World
// i=4 True -> Hello World 
//             Hello World
//             Hello World
//             Hello World
//             Hello World
// i=5 False
//Aplikasi Looping dalam Array
var items = ["Wallet", "Bag", "Rucksack", "Basket", "Net"]; // for(let i=0; i < items.length; i++){
//     console.log("Items ke - " + (i+1) + " adalah " + items[i])
// }
// ***
// ***
// ***
// for(let i=0; i<3; i++){
//     var temp = ""
//     for(let j=0; j<3; j++){
//         temp = temp + "@"
//     }
//     console.log(temp)
// }
// i=0 j=0 -> temp = *
// i=0 j=1 -> temp = **
// i=0 j=2 -> temp = ***
// i=1 j=0 -> temp = *
// i=1 j=1 -> temp = **
// i=1 j=2 -> temp = ***
// i=2 j=0 -> temp = *
// i=2 j=1 -> temp = **
// i=2 j=2 -> temp = ***
//i=3 
//While

var x = 0;

while (x < items.length) {
  // console.log("While looping");
  console.log("Items ke - " + (x + 1) + " adalah " + items[x]);
  x++;
}