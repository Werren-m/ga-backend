"use strict";

//Deklarasi Variable
var number = 10; // ES 5 : 2009;
// ES 6 : 2015;
// ES 7 : 2017; async await 
//Initialisasi Variable
// console.log(number);
//Hoisting 

var angka = 5;
var Angka = 5;
var ANGKA = 5; //Penulisan variable yg salah
// var 1 = 1;
// var 7number = 9;
// var list product = 10;
//Style penulisan variable

/**
 * 1. Camel Case
 * var listProducts = [];
 * 2. Snake Case
 * var list_products = [];
 * 3. Pascal Case 
 * var ListProducts = [];
 * 4. Kebab Case
 * var list-products = [];
 */
//Variable = tempat menampung data
//TIPE DATA
//Number

var x = 100;
var y = "100"; //  console.log(typeof y)
//Operasi
//Tambah, Kurang, Kali, Bagi, Modulus (%)
//  7/3 = 2 sisa 1
//  7%3 = 1
// 100%7 = 2
// 5%10 = 5
// 225%15 = 0
// Jenis Angka

/**
 * Decimal (10)
 * 0 - 9
 * Biner (2)
 * 0 1 
 * Octal (8)
 * 0 - 7 
 * Hexadecimal (16)
 * 0 - 9 A B C D E F
 */
//String 

var kata1 = "Hello";
var kata2 = "World";
var kata3 = kata1 + " " + kata2; // console.log(kata3);
//Boolean
//True or False

var isOn = true;
var hadLunch = false;
var isHot = true;
var isCold = false;
var isQualified = true; //Null

var kosong = null;
var nol = 0; //Undefined

var box = undefined; //Javascript is all about object
//Object

var mahasiswa = {
  nama: "Cencent",
  ipk: 3.21,
  isAbleToCode: true,
  codeJavascript: function codeJavascript() {
    console.log("Hello World");
  }
};
var subtotal = (2 * 3 + 1 - 5) / 2; // console.log(subtotal);

var checklist = 1;
checklist++;
checklist += 1;
checklist = checklist + 1; // console.log(checklist)
// a=b tidak sama b=a
//Operator Logika
// Logika Math
//  P      Q       P && Q      P || Q      !P 
//  True   True    True        True        False 
//  True   False   False       True        False
//  False  True    False       True        True
//  False  False   False       False       True
// console.log(1 || null || 2)
//ARRAY

var apple = "Apple";
var cherry = "Cherry";
var banana = "Banana";
var fruits = ["Apple", "Cherry", "Banana"]; // var fruits = new Array()
// console.log(fruits)
// console.log(typeof fruits[0])
// console.log(fruits[1].length)
// console.log(fruits[2].length)
// console.log("Jumlah data dalam array : ", fruits.length)

var arrayInArray = [["Apple", "Cherry"], ["Potato", "Carrot"], ["Beef", "Fish"]]; // console.log(arrayInArray)
// console.log(arrayInArray[1][1])

var arrayInObject = {
  fruits: ["Apple", "Cherry"],
  veggies: ["Potato", "Carrot"],
  meats: ["Beef", "Fish"]
};
console.log(arrayInObject);
var arrayOfObjects = [{
  title: "Kerjain tugas",
  isDone: true
}, {
  title: "Makan mie",
  isDone: false
}, {
  title: "Kerjain lagi",
  isDone: true
}]; // JSON = JavaScript Object Notation

var buah = [{
  namaBuah: "Apel",
  kuantitas: 10
}, {
  namaBuah: "Ceri",
  kuantitas: 5
}];