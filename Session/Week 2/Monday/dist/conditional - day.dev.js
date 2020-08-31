"use strict";

//Conditional
//If ... else
//switch ... case
//Ternary Operator
// var x = 5;
// if(x === 1){
//     console.log("Hasilnya 1");
// }
// else if(x === 2){
//     console.log("Hasilnya 2");
// }
// else {
//     console.log("Bukan angka 1 dan 2");
// }
// var hasEaten = true;
// if(!hasEaten){
//     console.log("Sudah kenyang!")
// }else {
//     console.log("Makan kuys.")
// }
// var hargaCabe = 30000
// if(hargaCabe < 30000){
//     console.log("Cabe masih murah!")
// }
// else if(hargaCabe > 30000){
//     console.log("Cabe mahal gan!")
// }
// else {
//     console.log("Harga cabe sedang Rp. 30.000")
// }
// var nilai = 105;
// if(nilai > 50 && nilai<= 100){
//     console.log("Lulus!")
// }
// else if(nilai >= 0 && nilai< 50){
//     console.log("Monmaap")
// }
// else if(nilai === 50){
//     console.log("Lolos!")
// }
// else {
//     console.log("Masukkan nilai yang benar trims!")
// }
//TERNARY OPERATOR
// var isWatered = "Water";
// var result;
// if(isWatered){
//     result = "Siram yang lain."
// }else {
//     result = "Siram tanaman."
// }
// result = isWatered === "water" ? "Siram yang lain." : "Siram tanaman."
// console.log(result)
//Switch ... case 
// var scrolls = "Hand of Midas";
// switch(scrolls){
//     case "Protection":
//         console.log("Scroll of Protection")
//         break;
//     case "Agility":
//         console.log("Scroll of Agility")
//         break;
//     default:
//         console.log("FInd another scroll")
//         break;
// }
//Storepedia
//User cashback = Rp. 10.000
//User : New : 5.000, Member = 10.000 , Diamond : 15.000
var cashback = 10000;
var user = "Karyawan";
var message;

switch (user) {
  case "New":
    cashback -= 5000;
    message = "User " + user + " cashback = Rp. " + cashback;
    break;

  case "Member":
    cashback += 0;
    message = "User " + user + " cashback = Rp. " + cashback;
    break;

  case "Diamond":
    cashback = cashback + 5000;
    message = "User " + user + " cashback = Rp. " + cashback;
    break;

  default:
    message = "Siapakah anda??";
    break;
}

console.log(message);