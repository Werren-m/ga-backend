// var container = document.querySelector('.container');

// console.log(container);

// var input = document.querySelector('input');

// console.log(input);

// var taskTitle = document.querySelector('#task-title');

// console.log(taskTitle);

// var btn = document.getElementById('btn');
// console.log(btn)

// btn.addEventListener('click',testFunction);

// function testFunction(){
//     // console.log("Click already worked.");
//     alert("Click already worked.");
// }

var tasks = [
    {
        id : 1,
        title : "Makan"
    },
    {
        id : 2,
        title : "Minum"
    },

];
readTask();
function submitHandler(){
    //get DOM
    var taskValue = document.getElementById('task-title').value;
    console.log(taskValue);

    addTask(taskValue);
    readTask();
    return false;
}

function addTask(task){
    //Untuk create object dari input
    var taskObject = createObject(task)

    //Untuk push ke dalam tasks -> sudah berbentuk object
    tasks.push(taskObject);
    console.log(`"${task}" has been added!`)
}

function readTask(){
    //get DOM
    var taskData = document.getElementById('task-data');
    taskData.innerHTML = "";
    
    //Looping untuk mengambil task
    for(let i=0; i<tasks.length; i++){
        let taskHTML = `
            <p>${tasks[i].id}. ${tasks[i].title}</p>
        `
        taskData.insertAdjacentHTML('beforeend', taskHTML)
    }
}

function createObject(task){
    var temp = {
        id : generateId() + 1,
        title : task
    }

    return temp;
}

function generateId(){
    var lengthTask = tasks.length;
    var id = tasks[lengthTask-1].id;

    return id;
}
