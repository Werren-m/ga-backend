"use strict";

// var container = document.querySelector('.container');
// console.log(container);
// var input = document.querySelector('input');
// console.log(input);
// var taskData = document.querySelector('#task-data');
// console.log(taskData);
// var btn = document.getElementById('btn');
// btn.addEventListener('click',submitHandler);
var tasks = [{
  id: 1,
  title: "Makan",
  status: "progress"
}, {
  id: 2,
  title: "Minum",
  status: "done"
}];
getData();

function submitHandler() {
  // console.log("Click already worked.");
  var taskValue = document.getElementById('task-title').value;
  var taskStatus = document.getElementById('task-status').value;
  addData(taskValue, taskStatus);
  getData();
  document.getElementById('task-title').value = "";
  return false;
}

function getData() {
  var taskData = document.getElementById('task-data');
  taskData.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    var taskHTML = "\n            <p>".concat(tasks[i].id, ". ").concat(tasks[i].title, " , status : ").concat(tasks[i].status, "</p>\n        ");
    taskData.insertAdjacentHTML('beforeend', taskHTML);
  }
}

function addData(title, status) {
  var taskObject = createObject(title, status);
  tasks.push(taskObject);
  console.log("\"".concat(title, "\" has been inserted!"));
}

function createObject(title, status) {
  var temp = {
    id: generateId() + 1,
    title: title,
    status: status
  };
  return temp;
}

function generateId() {
  var tasksLength = tasks.length;
  var id = tasks[tasksLength - 1].id;
  return id; // return tasks[tasks.length - 1].id
}