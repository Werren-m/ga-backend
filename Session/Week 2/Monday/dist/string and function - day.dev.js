"use strict";

// //String
// var sentences = "Saya makan nasi ayam enak"
// var upperSentences = sentences.toUpperCase()
// var lowerSentences = upperSentences.toLowerCase()
// console.log(upperSentences)
// console.log(lowerSentences)
// var lengthSentences = sentences.length
// console.log(lengthSentences)
// var sliceSentences = sentences.slice(0,10)
// console.log(sliceSentences)
// var arrayOfSentences = sentences.split(" ")
// console.log(arrayOfSentences)
// var joinSentences = arrayOfSentences.join(",")
// console.log(joinSentences)
// var text = "bareng mantan."
// var curhat = sentences.concat(" ", text)
// console.log(curhat)
//FUNCTION 
//Function Declaration
// console.log(tambah(1,2))
// function tambah(a,b){
//     var c = a + b;
//     // console.log(c);
//     return c;
// }
// tambah(1,2);
// tambah(3,7);
// tambah(10,5);
// var penampung = tambah(1,2)
// var hardwares = ["keyboard","mouse","monitor"]
// function printHardware(hardwares){
//     for(let i=0; i<hardwares.length; i++){
//         console.log(hardwares[i])
//     }
// }
// printHardware(hardwares)
//Prime number => Bilangan yg memiliki 2 faktor
// 10 -> 1,2,5,10
// 15 -> 1, 3, 5, 15 
function checkPrime(number) {
  var faktor = 0;

  for (var i = 1; i <= number; i++) {
    if (number % i === 0) {
      faktor++;
    }
  } // if(faktor === 2){
  //     return true;
  // }else{
  //     return false;
  // }


  return faktor === 2 ? true : false; // return faktor;
}

console.log(checkPrime(7)); //Function Expression
// var compute = function(a,b){
//     console.log(a + b);
// }
//Function Arrow
// var hitung = (a,b) => {
//     console.log(a + b);
// }