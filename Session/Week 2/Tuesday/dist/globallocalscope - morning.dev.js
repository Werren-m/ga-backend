"use strict";

//Global variable / scope
//Local variable / scope
//Block scope {}
//Global Variable
// var number = 1;
// function prosesJumlah(){
//     //Local Variable
//     var jumlah = 9;
//     return number + jumlah;
// }
// console.log(jumlah)
// function prosesKurang(){
//     return number - 3;
// }
// console.log(prosesJumlah());
// console.log(prosesKurang());
//Array -> Built in function
// var books = ["Math","Chemistry"];
// console.log(books)
// books.push("Physics");
// console.log(books)
// books.unshift("Indonesia");
// console.log(books)
// books.pop();
// console.log(books)
// books.sort();
// console.log(books)
//To Do List
var tasks = [];

function addTask(task) {
  tasks.push(task);
  console.log("Task berhasil di input yeah!");
}

function getTask() {
  if (tasks.length === 0) {
    console.log("Task is kosong..");
  } else {
    console.log("List task : ", tasks);
  } // console.log("List Task : ", tasks)

}

function deleteTask(task) {
  if (tasks.length === 0) {
    console.log("Tidak ada yang di delete!");
  } else {
    var result; //Proses cek apakah ada task dalam tasks

    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i] === task) {
        result = true;
        break;
      } else {
        result = false;
      }
    } //Jika result true


    if (result) {
      var temp = [];

      for (var _i = 0; _i < tasks.length; _i++) {
        if (tasks[_i] !== task) {
          temp.push(tasks[_i]);
        }
      }

      tasks = temp;
    } else {
      console.log("Tidak ada task tsb thanks.");
    } // console.log(result)

  }
}

getTask();
addTask("Coding javascript");
addTask("Kerjain tugas");
addTask("Bisa mabar yeah");
getTask();
deleteTask("Coding javascript");
deleteTask("Kerjain tugas");
deleteTask("Makan");
getTask(); // var numbers = [5,2,10,7,1];
// var search = 10;
// function searchNumber(search){
//     // var result;
//     for(let i=0; i<numbers.length; i++){
//         if(numbers[i] === search){
//             // result = true;
//             // break;
//             return true
//         }
//         // else {
//         //     result = false;
//         // }
//     }
//     return false;
//     // return result;
// }
// console.log(searchNumber(search));