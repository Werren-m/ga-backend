//Variable
//Tipe Data 
// String, Number, Boolean, undefined, null, Object

//Conditional
// If ... else
// switch ... case
// Ternary Operators

// var x = 3;
// if(x === 1){
//     console.log("Ini adalah Satu")
// }
// else if (x === 2){
//     console.log("Ini adalah Dua")
// }
// else {
//     console.log("Ini bukan Satu dan Dua")
// }

// var isDone = false;
// if(isDone !== true){
//     console.log("Bisa maen, horee!")
// }else {
//     console.log("Kerjakan dulu gan..")
// }

// var hargaTiket = 10000
// if(hargaTiket < 10000){
//     console.log("Harga di bawah 10000")
// }
// else if(hargaTiket > 10000){
//     console.log("Harga di atas 10000")
// }
// else {
//     console.log("Harga tiket 10000")
// }

// var nilai = 105;
// if(nilai > 50 && nilai <= 100){
//     console.log("Lulus")
// }
// else if(nilai >= 0 && nilai < 50){
//     console.log("Monmaap")
// }
// else if(nilai === 50){
//     console.log("Nilai 50 anda lolos!")
// }
// else {
//     console.log("Masukkan nilai yang benar trims.")
// }

// var a = 5;
// var b = 10;
// if(a === 5){
//     console.log("A = 5")
// }
// if(b === 10){
//     console.log("B = 10")
// }

//TERNARY OPERATOR
// var isCooked = false;
// var result;
// var total = 15000
// if(isCooked){
//     result = "Well done"
// }else {
//     result = "Raw"
// }
// result = isCooked ? "Well done" : "Raw"
// result = total > 10000 ? "Kemahalan bos!" : "Harga pas!"

// console.log(result)


//Switch ... case 
// var type = "Electric";

// switch(type){
//     case "Fire":
//         console.log("Type = Fire")
//         break;
//     case "Water":
//         console.log("Type = Water")
//         break;
//     default:
//         console.log("There isn't any type of that.")
//         break;
// }

//Exercise 
// Tiket karnaval memiliki syarat masuk :
// Harga tiket : Rp 10.000
// Dewasa : Rp 10.000
// Remaja : Rp. 8000
// Anak Kecil : Rp. 5000

var ticket = 10000
var visitor = "Karyawan"
var message;

switch(visitor){
    case "Dewasa":
        ticket += 0;
        message = "Untuk tiket " + visitor + " dikenakan harga Rp. " + ticket;
        break;
    case "Remaja":
        ticket = ticket - 2000
        message = "Untuk tiket " + visitor + " dikenakan harga Rp. " + ticket;
        break;
    case "Anak":
        ticket -= 5000
        message = "Untuk tiket " + visitor + " dikenakan harga Rp. " + ticket;
        break;
    default: 
        message = "Masukkan jenis visitor!!";
        break;
}
console.log(message)