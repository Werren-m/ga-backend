// FPB

/**
 * Algoritma
 * - Looping maju/mundur 
 * - Cari number yg min
 * - Definis FPB = faktor yang habis membagi ke 2 bilangan tsb
 */

// function fpb(number1 , number2){
//     var minNumber;
//     if(number1 < number2){
//         minNumber = number1;
//     }else {
//         minNumber = number2;
//     }

//     for(let i=minNumber; i >= 1; i--){
//         if(number1 % i === 0 && number2 % i === 0){
//             return i;
//         }
//     }
// }

// console.log(fpb(30,50)) //10
// console.log(fpb(12,15)) //3
// console.log(fpb(35,17)) //1

// Print the first n Prime numbers
/**
 * Algoritma
 * - Definisi dari bilangan Prima
 * BIlangan Prima adalah bilangan yang memiliki 2 faktor yaitu 1 dan bilangan itu sendiri
 * - Print / Looping
 */
// function checkPrime(number) {
//     //code here
//     // var faktor = [];
//     var jumlahFaktor = 0;
//     for (let i = 1; i <= number; i++) {
//         if (number % i === 0) {
//             // faktor.push(i);
//             jumlahFaktor++;
//         }
//     }
//     //Cara If ... else
//     if (jumlahFaktor === 2) {
//         return true;
//     } else {
//         return false;
//     }
//     //Cara Ternary
//     // return jumlahFaktor === 2 ? true : false;
// }
// function print(n) {
//     //code here 
//     var x=0;
//     var number = 1;
//     if(n === 0){
//         console.log(1);
//     }
//     else{
//         while(x < n){
//             if(checkPrime(number)){
//                 console.log(number);
//                 x++;
//             }
//             number++;
//         }
//     }
// }

// //Test Case
// print(3); //2 3 5
// print(5); //2 3 5 7 11 
// print(0); //1

// Mean
// function mean(array){
//     //code here
//     var total = 0;
//     var average;
//     for(let i=0;i<array.length;i++){
//         total = total + array[i];
//     }
//     average = total / array.length;

//     return average.toFixed(3);
// }

// //Test 
// console.log(mean([1,2,3,4,5])) //3
// console.log(mean([3.7,5.3,7.0,1.9,3.1,0.5,1.5])) //3.28 -> 2 angka di blkg

// Check if 'x' and 'o' are the same
// function checkXO(string){
//     //code here
//     var flagX = 0;
//     var flagO = 0;
//     for(let i=0; i<string.length; i++){
//         if(string[i] === 'x'){
//             flagX++;
//         }
//         else if(string[i] === 'o'){
//             flagO++;
//         }
//     }

//     if(flagX - flagO === 0){
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
function swap(string){
    //code here
    var huruf = 'abcdefghijklmnopqrstuvwxyz';
    var kata = '';

    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j < huruf.length; j++) {
            if (string[i] == huruf[j]) {
                if (string[i] == 'z') {
                    kata += 'a';
                }
                else kata += huruf[j + 1];
            }
        }
    }
    console.log(kata);

    // var encrypt = [];
    // for (let i = 0; i < string.length; i++) {
    //     var ascii = string.charCodeAt(i);
    //     encrypt += String.fromCharCode(ascii + 1);
    // }
    // console.log(encrypt);
}

//Test
swap("wow") //xpx
swap("javascript") //kbwbtdsjqu