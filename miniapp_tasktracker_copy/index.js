const form = document.querySelector("form");
const input = document.querySelector("input");
const currentTaskContainer = document.querySelector(".current-tasks-container")
const completedTaskContainer = document.querySelector(".completed-tasks-container")
 
const tasks = [];
const cTasks = [];


console.log("1");

class Storage{
    constructor(name){
        this.name = name;
        // this.tasks = [];
    }
    get (){
        // return this.tasks;
        return JSON.parse(localStorage.getItem(this.name)) || [];
    }
    set(updatedTasks){
        localStorage.setItem(this.name, JSON.stringify(updatedTasks));
        // this.tasks = updatedTasks;
    }
}

const s = new Storage("currentTasks");
const cs = new Storage("completedTasks");



// function getCurrentTasks(){
//     return tasks;
//     // return JSON?.parse(localStorage?.getItem("currentTasks")) || []
// }

// function getCompletedTasks(){ 
//     return cTasks;
//     // return JSON?.parse(localStorage?.getItem("completedTasks")) || []
// }

function addToCurrentTasks(task){
    console.log("3");

    let temp = s.get();
    temp.push(task);
    s.set(temp);
    // localStorage.setItem("currentTasks", JSON.stringify(currentTasks));
    const taskItem = document.createElement("div");
    const taskDescription = document.createElement("p");
    const completeButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    taskDescription.textContent = task.description;
    deleteButton.textContent = "Delete";
    completeButton.textContent = "Mark as completed";
    
    taskItem.classList.add("task-item");

    deleteButton.addEventListener("click", () => {
console.log("5");

        currentTaskContainer.removeChild(taskItem);
        s.set(s.get().filter((cTask) => cTask.id !== task.id));
        // currentTasks = currentTasks.filter((cTask) => cTask.id !== task.id);
    
        // localStorage.setItem("currentTasks", JSON.stringify(currentTasks));
    })
    
    completeButton.addEventListener("click", () => {
console.log("6");

        currentTaskContainer.removeChild(taskItem);
        s.set(s.get().filter((cTask) => cTask.id !== task.id));
        // currentTasks = currentTasks.filter((cTask) => cTask.id !== task.id);
        // localStorage.setItem("currentTasks", JSON.stringify(currentTasks));
        addToCompletedTasks(task, true);
    })

    taskItem.appendChild(taskDescription);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    currentTaskContainer.appendChild(taskItem);
}


function addToCompletedTasks(task, save = false){
    console.log("4");
    if(save){
        let temp = cs.get();
        temp.push(task);
        cs.set(temp);
    }
    // localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
        
    const taskItem = document.createElement("div");
    const taskDescription = document.createElement("p");
    const deleteButton = document.createElement("button");

    taskDescription.textContent = task.description;
    deleteButton.textContent = "Delete";
    
    taskItem.classList.add("task-item");

    deleteButton.addEventListener("click", () => {
        completedTaskContainer.removeChild(taskItem);

        cs.set(cs.get().filter((cTask) => cTask.id !== task.id));
        // completedTasks = completedTasks.filter((cTask) => cTask.id !== task.id);
        // localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    })
    
    taskItem.appendChild(taskDescription);
    taskItem.appendChild(deleteButton);

    completedTaskContainer.appendChild(taskItem);
}

function removeFromCompletedTasks(task){
}

const currentTasks = s.get();
console.log("Length", currentTasks.length);

for(let i = 0 ; i < currentTasks.length; i++){
    addToCurrentTasks(currentTasks[i]);
}

const completedTasks = cs.get();
for(let i = 0 ; i < completedTasks.length; i++){
    addToCompletedTasks(completedTasks[i], false);
}

function createNewTask(value){
console.log("2");

    const task = {
        id:1,// uuid.v4(),
        description: value,
    }
    addToCurrentTasks(task);
}

form.addEventListener("submit", (e) => {
console.log("0");

    e.preventDefault();
    createNewTask(input.value);
})