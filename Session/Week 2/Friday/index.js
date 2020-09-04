// FPB
/**
 * Algoritma
 * - Cari definisi FPB
 * - Cari number min
 * - Looping maju/mundur dari number min sampai 1
 * - Pake operator logic &&
 * - Habis membagi kedua bilangan tsb
 */

// function fpb(number1, number2){
//     var minNumber;
//     //Cara Conditional If..else
//     if(number1 < number2){
//         minNumber = number1; 
//     }else {
//         minNumber = number2;
//     }
//     //Cara Ternary Operator
//     // minNumber = number1 < number2 ? number1 : number2;
//     for(let i=minNumber; i>=1; i--){
//         if(number1 % i === 0 && number2 % i === 0){
//             return i
//         }
//     }
// }

// console.log(fpb(30,50));
// console.log(fpb(12,15));
// console.log(fpb(35,17));
// console.log(fpb(100,50));
// console.log(fpb(390,150));

// Print the first n numbers
/**
 * Algoritma
 * - Looping number yg kita input
 * - Definisi bilangan prima
 * Bilangan Prima : bilangan yang memiliki faktor 1 dan bilangan itu sendiri 
 * Faktor = 2
 * - Print pake while
 */
// function checkPrime(number){
//     // var faktor = [];
//     var jumlahFaktor = 0;
//     //code here
//     for(let i=1; i<=number; i++){
//         if(number % i === 0){
//             // faktor.push(i);
//             jumlahFaktor++;
//         }
//     }
//     if(jumlahFaktor === 2){
//         return true;
//     }else {
//         return false;
//     }
//     // return jumlahFaktor;
// }
// function print(n){
//     //code here
//     var x = 0; 
//     var number = 1;

//     if(n < 1) {
//         console.log(1)
//     }else {
//         while(x < n){

//             if(checkPrime(number)){
//                 console.log(number);
//                 x++;
//             }
//             number++;
//         }
//     }
// }

//Test Case
// print(3); //2 3 5
// print(5); //2 3 5 7 11 
// print(0); //1
// console.log(checkPrime(7));

// Mean
// function mean(array){
//     var total = 0;
//     var average;
//     for(let i=0; i<array.length; i++){
//         total = total + array[i];
//     }
//     average = total / array.length;

//     return average.toFixed(3);
// }

// console.log(mean([1,2,3,4,5])) //3
// console.log(mean([3.7,5.3,7.0,1.9,3.1,0.5,1.5])) //3.28 -> 2 

// 'x' and 'o'
// function checkXO(string) {
//     //code here
//     var flagX=0;
//     var flagO=0;
//     for (let i = 0; i < string.length; i++) {
//         if(string[i] === 'x'){
//             flagX++;
//         }
//         else if(string[i] === 'o'){
//             flagO++;
//         }
//     }
//     if(flagX === flagO){
//         return 1;
//     }else {
//         return -1;
//     }
//     // return flagX === flagO ? 1 : -1;
// }

// //Test
// console.log(checkXO('xxxxxooooo')) //1
// console.log(checkXO('xxxooooo')) //-1
// console.log(checkXO('xoxoxoxoxo')) //1

// Encrypt the string

// function swap(string) {
//     //code here
//     // var encrypt = [];
//     // for (let i = 0; i < string.length; i++) {
//     //     var ascii = string.charCodeAt(i);
//     //     encrypt += String.fromCharCode(ascii + 1);
//     // }
//     // console.log(encrypt);

//     var huruf = 'abcdefghijklmnopqrstuvwxyz';
//     var kata = '';

//     for (var i = 0; i < string.length; i++) {
//         for (var j = 0; j < huruf.length; j++) {
//             if (string[i] == huruf[j]) {
//                 if (string[i] == 'z') {
//                     kata += 'a';
//                 }
//                 else kata += huruf[j + 1];
//             }
//         }
//     }
//     console.log(kata);
// }

// //Test
// swap("wow") //xpx
// swap("javascript") //kbwbtdsjqu

var cities = [
    {
        citiesCode : 1,
        citiesName : "Bangkok"
    },
    {
        citiesCode : 2,
        citiesName : "Jakarta"
    }
]
// console.log(cities[0]["citiesCode"])
// console.log(cities[0].citiesName)

// output
var citiesNew = {
    1: "Bangkok",
    2: "Jakarta"
}

var citiesNew = {}
for(let i=0;i<cities.length; i++){
    citiesNew[cities[i].citiesCode] = cities[i].citiesName;
}
console.log(citiesNew);