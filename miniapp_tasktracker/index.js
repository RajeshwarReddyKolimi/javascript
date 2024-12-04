
const form = document.querySelector("form");
const input = document.querySelector("input");
const currentTaskContainer = document.querySelector(".current-tasks-container")
const completedTaskContainer = document.querySelector(".completed-tasks-container")
 

let currentTasks = getCurrentTasks(); 
let completedTasks = getCompletedTasks(); 


function getCurrentTasks(){
    return JSON?.parse(localStorage?.getItem("currentTasks")) || []
}

function getCompletedTasks(){ 
    return JSON?.parse(localStorage?.getItem("completedTasks")) || []
}

function addToCurrentTasks(task){

    currentTasks.push(task);
    localStorage.setItem("currentTasks", JSON.stringify(currentTasks));
    const taskItem = document.createElement("div");
    const taskDescription = document.createElement("p");
    const completeButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    taskDescription.textContent = task.description;
    deleteButton.textContent = "Delete";
    completeButton.textContent = "Mark as completed";
    
    taskItem.classList.add("task-item");

    deleteButton.addEventListener("click", () => {
        currentTaskContainer.removeChild(taskItem);
        currentTasks = currentTasks.filter((cTask) => cTask.id !== task.id);
        localStorage.setItem("currentTasks", JSON.stringify(currentTasks));
    })
    
    completeButton.addEventListener("click", () => {
        currentTaskContainer.removeChild(taskItem);
        currentTasks = currentTasks.filter((cTask) => cTask.id !== task.id);
        localStorage.setItem("currentTasks", JSON.stringify(currentTasks));
        addToCompletedTasks(task);
    })

    taskItem.appendChild(taskDescription);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    currentTaskContainer.appendChild(taskItem);
}


function addToCompletedTasks(task){
    completedTasks.push(task);
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
        
    const taskItem = document.createElement("div");
    const taskDescription = document.createElement("p");
    const deleteButton = document.createElement("button");

    taskDescription.textContent = task.description;
    deleteButton.textContent = "Delete";
    
    taskItem.classList.add("task-item");

    deleteButton.addEventListener("click", () => {
        completedTaskContainer.removeChild(taskItem);
        completedTasks = completedTasks.filter((cTask) => cTask.id !== task.id);
        localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    })
    
    taskItem.appendChild(taskDescription);
    taskItem.appendChild(deleteButton);

    completedTaskContainer.appendChild(taskItem);
}

function removeFromCompletedTasks(task){
}

for(let i = 0 ; i < currentTasks.length; i++){
    addToCurrentTasks(currentTasks[i]);
}

for(let i = 0 ; i < completedTasks.length; i++){
    addToCompletedTasks(completedTasks[i]);
}

function createNewTask(value){
    const task = {
        id: uuid.v4(),
        description: value,
    }
    addToCurrentTasks(task);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    createNewTask(input.value);
})