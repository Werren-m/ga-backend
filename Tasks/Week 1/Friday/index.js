//Deklarasi Variable
var x = 10;

//Initialisai Variable
// console.log(x);

var number = 100;
var nUmBeR = 100;
var NUMBER = 100;

//Penulisan Variable yg salah
// var 1 = 1;
// var 7angka = 0;
// var list products = [];

//Cara penulisan Variable
/**
 * Camel Case
 * var listProducts = [];
 * 
 * Snake Case 
 * var list_products = [];
 * 
 * Kebab Case
 * var list-products = [];
 * 
 * Pascal Case
 * var ListProducts = []; 
 */

 //Variable = tempat menampung sebuah data

//  TIPE DATA
//Number
var angka = 100;

//String
// var kataMutiara = new String()
var kata = "Hello World";
var ANGKA = "100";

//Boolean
//True or False
var isOn = true;
var isWokeUp = false;
var isHot = true;
var isWindy = false;
var isCold = true;

//Null
var n = null;
var N = 0;

//Undefined
var box = undefined;

//Javascript all about object
//Object 
var mahasiswa = {
    nama : "Cencent",
    ipk : 3.21,
    isAbleCoding : true,
    computeMath : function(){
        console.log(100);
    }
}


//Operasi Math
// Tambah, Kurang, Kali, Bagi, Modulus
//Modulus
// 7/3 = 2 sisa 1
//7%3 = 1
// console.log(Math.pow(15,3));

var a = 5;
var b = 7;
var total = a + b;

// console.log(total)
var kata1 = "10"
var kata2 = true

var kata3 = kata1 + kata2;

// console.log(typeof kata3)

// var subtotal = ((2 * 3 + 1 )- 5) / 2
// console.log(subtotal)

var p = 7;
var q = p;
// q++;
// q+=1;
// q=q+1;

// p=q tidak sama q=p

// console.log(p)
q++
// console.log(q)

// Tipe Angka
/**
 * 1. Decimal (10)
 * 0 - 9
 * 
 * 2. Biner (2)
 * 0 1
 * 
 * 1 byte = 8 angka biner/bit , contoh :
 * 01100011 -> 8 bit = 1 byte,
 * 1010001101011100 -> 16 bit = 2 byte,
 * 
 * 3. Octal (8)
 * 0 - 7 
 * 
 * 4. Hexadecimal (16)
 * 0 - 9 A B C D E F
 */

// Logika Math
//  P      Q       P && Q      P || Q      !P
//  True   True    True        True        False 
//  True   False   False       True        False
//  False  True    False       True        True
//  False  False   False       False       True

//ARRAY 

var apple = "Apple";
var cherry = "Cherry";
var banana = "Banana";

// var fruits = new Array()
var fruits = ["Apple","Cherry","Banana","Melon","Grapes"];
// console.log(typeof fruits)
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])
// console.log(fruits[4])

// console.log("Jumlah data dalam array : ", fruits.length)
// console.log("Jumlah huruf " + fruits[0] + " adalah : " + fruits[0].length)
// console.log("Jumlah huruf " + fruits[1] + " adalah : " + fruits[1].length)
// console.log("Jumlah huruf " + fruits[2] + " adalah : " + fruits[2].length)
// console.log("Jumlah huruf " + fruits[3] + " adalah : " + fruits[3].length)
// console.log("Jumlah huruf " + fruits[4] + " adalah : " + fruits[4].length)

var arrayInArray = [
    ["Apple","Cherry"],
    ["Potato","Broccoli"],
    ["Meat","Fish"]
]

var arrayInObject = {
    fruits : ["Apple","Cherry"],
    veggies : ["Potato","Broccolo"],
    meats : ["Meat","Fish"]
}
// console.log(arrayInArray[0][0])
// console.log(arrayInObject.fruits[0])

// console.log(1 || null && 5)