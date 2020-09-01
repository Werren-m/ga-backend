"use strict";

function addTask(tasks, task) {
  tasks.push(task);
  console.log("Task berhasil di input yeah!");
}

function getTask(tasks) {
  if (tasks.length === 0) {
    console.log("Task is kosong..");
  } else {
    console.log("List task : ", tasks);
  } // console.log("List Task : ", tasks)

}

function deleteTask(tasks, task) {
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

module.exports = {
  addTask: addTask,
  getTask: getTask,
  deleteTask: deleteTask
};