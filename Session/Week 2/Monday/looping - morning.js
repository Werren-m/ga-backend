//Looping

//for
//while
//do ... while

// for(let i = 0; i < 5; i++){
//     // console.log("Hello World!!")
//     console.log(i+1)
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

// console.log(i)

//Aplikasi for dalam Array
var language = ["Java","C++","Javascript","Python","Dart"]
// for(let i = 0; i < language.length; i++){
//     console.log("Bahasa ke - " + (i+1) + " adalah = " + language[i])
// }
// *****
// *****
// *****
// *****
// *****

// for(let i = 0; i< 3; i++){
//     var temp = ""
//     for(let j = 0; j< 3; j++){
//         // console.log("*")
//         temp += "*"
//     }
//     console.log(temp)
// }

// ***
// ***
// ***
// i=0 j=0 -> temp = *
// i=0 j=1 -> temp = **
// i=0 j=2 -> temp = ***

// i=1 j=0 -> temp = *
// i=1 j=1 -> temp = **
// i=1 j=2 -> temp = ***

// i=2 j=0 -> temp = *
// i=2 j=1 -> temp = **
// i=2 j=2 -> temp = ***

var x = 0;
while(x < language.length){
    // console.log("While looping");
    console.log("Bahasa ke - " + (x+1) + " adalah = " + language[x])
    x++;
}