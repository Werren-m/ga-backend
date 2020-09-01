var taskController = require('./controllerTodo')

var tasks = [];

console.table(taskController)
taskController.getTask(tasks);
taskController.addTask(tasks,"Coding javascript");
taskController.addTask(tasks,"Kerjain tugas");
taskController.addTask(tasks,"Bisa mabar yeah");
taskController.getTask(tasks);
taskController.deleteTask(tasks,"Coding javascript");
taskController.deleteTask(tasks,"Kerjain tugas");
taskController.deleteTask(tasks,"Makan");
taskController.getTask(tasks);