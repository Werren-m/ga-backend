"use strict";

//Exercise 1
//Check odd or even number

/**
 * Step 1 : Temukan dulu Algoritma
 * - Cari definisi
 * - Cari solusi secara step by step
 * 
 * Step 2 : Buat pseudocode
 * - SET angka
 * - IF angka % 2 == 0 
 *      THEN print "Angka adalah Genap"
 *   ENDIF
 * - ELSE IF angka % 2 != 0
 *      THEN print "Angka adalah Ganjil"
 *   ENDIF
 * 
 * Step 3 : Ubah Coding 
 * - Ubah pseudocode ke bahasa pemrograman
 * - Testing
 */
// var angka = 8;
// if (angka % 2 === 0) {
//     console.log(angka + " adalah Genap.");
// }
// else if (angka % 2 !== 0) {
//     console.log(angka + " adalah Ganjil.")
// }
//Rumus luas persegi panjang.

/**
 * Algoritma
 * - Rumus = p . l
 * 
 * Pseudocode 
 * - SET luas
 * - SET panjang
 * - SET lebar
 * - luas = panjang * lebar
 * 
 * - PRINT luas
 * 
 * Coding
 * var luas;
 * var panjang;
 * var lebar;
 * 
 * luas = panjang * lebar;
 * 
 * console.log(luas)
 */
//Temukan faktor dari angka
//Input -> 8
//Output -> [1,2,4,8]

/**
 * Algoritma
 * - Faktor : habis membagi bilangan tersebut
 * - Step 1: looping dari 1 sampai 8 untuk menemukan faktor yang sesuai
 * - Step 2: jika angka di mod dari 1 - 8 = 0 maka faktor tsb
 * 
 * Pseudocode
 * SET number TO 8
 * SET factor AS AN ARRAY
 * 
 * FOR i = 1 TO i = 8
 *      IF number % i === 0 
 *          //THEN i merupakan faktor dari number
 *          THEN i PUSH to factor     
 *      END IF
 * END FOR
 * 
 * PRINT factor
 * 
 * Coding
 * var number;
 * var factor = []
 * 
 * for(let i=1;i<number;i++){
 *      if(number%i===0){
 *          factor.push(i)
 *      }
 * }
 * 
 * console.log(factor)
 */
// var number = 28;
// var factor = [];
// for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//         factor.push(i);
//     }
// }
// console.log(factor);
//Exercise 2

/**
 * Algoritma
 * - Cari mencari kelipatan
 * - angka di mod 3 == 0, angka di mod 5 == 0,
 * - angka di mod 3 AND 5 == 0
 * 
 * Coding
 */
// var number = 15;
// for (let i = 1; i <= number; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i + " kelipatan 3 dan 5");
//     }
//     else if (i % 5 === 0) {
//         console.log(i + " kelipatan 5");
//     }
//     else if (i % 3 === 0) {
//         console.log(i + " kelipatan 3")
//     }
//     else {
//         console.log(i)
//     }
// }
//Exercise 3

/**
 * Algoritma
 * - Cari definisi / alur / flow
 * - Menggunakan looping 
 * - Print dulu kebawah / menggunakan 1 for
 * - Print secara row dan kolom / menggunakan 2 for
 * 
 * 
 */
// for(let a=0; a<3; a++){
//     var star = ""
//     for(let b=0; b<i+1; b++){
//         star += "*"    
//     }
//     console.log(star);
// }
//SIMULASI
// i = 0 true -> j=0 -> star = *
// i = 0 true -> j=1 false
// i = 0 console.log(star)
// i = 1 true -> j=0 -> star = *
// i = 1 true -> j=1 -> star = **
// i = 1 true -> j=2 false
// i = 1 console.log(star)
// i = 2 true -> j=0 -> star = *
// i = 2 true -> j=1 -> star = **
// i = 2 true -> j=2 -> star = ***
// i = 2 true -> j=3 false
// i = 2 console.log(star)
//SIMULASI
// i = 0 true -> j=0 -> star = *
// i = 0 true -> j=1 -> star = **
// i = 0 true -> j=2 -> star = ***
// i = 0 console.log(star)
// i = 1 true -> j=0 -> star = *
// i = 1 true -> j=1 -> star = **
// i = 1 true -> j=2 -> star = ***
// i = 1 console.log(star)
// i = 2 true -> j=0 -> star = *
// i = 2 true -> j=1 -> star = **
// i = 2 true -> j=2 -> star = ***
// i = 2 console.log(star)
// i = 3 false 
//Exercise 4

/**
 * Algoritma
 * - Yang tidak spasi karakternya di masukkan
 * - Looping dari index 0 sampe n-1
 * 
 * Pseudocode
 * SET string
 * SET temp AS AN ARRAY
 * SET word TO EMPTY
 * 
 * FOR i = 0 TO i = string.length - 1
 *      IF string index ke i != " "
 *          THEN word + string index ke i
 *      ENDIF
 *      ELSE 
 *          THEN word PUSH TO temp
 *               SET word to EMPTY
 *      ENDIF
 *      
 *      IF i == string.length - 1
 *          THEN word PUSH TO temp
 *      ENDIF
 * ENDFOR
 * 
 * PRINT temp
 * 
 * Coding
 */
// var string = "Lorem ipsum is dummy text";
// var temp = [];
// var word = "";
// for(let i=0;i<string.length;i++){
//     if(string[i] !== " "){
//         word += string[i];
//         // console.log(word);
//     }
//     else{
//         // console.log(word)
//         temp.push(word);
//         word = "";
//     }
//     if(i === string.length - 1){
//         temp.push(word);
//     }
// }
// console.log(temp)
//Exercise 5

/**
 * Algoritma
 * - Looping mundur
 * - Menemukan arti dari faktorial
 * 
 * Pseudocode
 * SET angka
 * SET total TO 1
 * 
 * FOR i = angka TO i = 1 
 *      IF i !== 1 
 *          THEN PRINT i + "."
 *      ENDIF
 *      ELSE 
 *          THEN PRINT i + " = "
 *      ENDIF
 *      total = total * i
 * ENDFOR
 * 
 * PRINT total
 * 
 * Coding
 */
//  5.4.3.2.1
//  20.3.2.1
//  60.2.1
//  120.1
//  120
var angka = 5;
var total = 1;
var temp = "";

for (var i = angka; i > 0; i--) {
  if (i !== 1) {
    // console.log(i + ".");
    temp += "".concat(i, ".");
  } else {
    // console.log(i + " = ")
    temp += "".concat(i, " = ");
  }

  total = total * i;
}

console.log(temp, total);