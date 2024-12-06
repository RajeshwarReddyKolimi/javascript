import { v4 as uuidv4 } from "uuid"

const form = document.querySelector("form");
const input = document.querySelector("input");
const currentTaskContainer = document.querySelector(".current-tasks-container")
const completedTaskContainer = document.querySelector(".completed-tasks-container")


class TasksContainer{ 
    constructor(name){
        this.name = name;
    }
    get (){
        return JSON.parse(localStorage.getItem(this.name)) || [];
    }
    set(updatedTasks){
        localStorage.setItem(this.name, JSON.stringify(updatedTasks));
    }
}

const currentTasks = new TasksContainer("currentTasks");
const completedTasks = new TasksContainer("completedTasks");

function addToCurrentTasks(task, shouldAddToArray){
    if(shouldAddToArray){
        let temp = currentTasks.get();
        temp.push(task);
        currentTasks.set(temp);
    }
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
        currentTasks.set(currentTasks.get().filter((cTask) => cTask.id !== task.id));
    })
    
    completeButton.addEventListener("click", () => {
        currentTaskContainer.removeChild(taskItem);
        currentTasks.set(currentTasks.get().filter((cTask) => cTask.id !== task.id));
        addToCompletedTasks(task, true);
    })

    taskItem.appendChild(taskDescription);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    currentTaskContainer.appendChild(taskItem);
    input.value = "";
}


function addToCompletedTasks(task, shouldAddToArray){
    if(shouldAddToArray){
        let temp = completedTasks.get();
        temp.push(task);
        completedTasks.set(temp);
    }
        
    const taskItem = document.createElement("div");
    const taskDescription = document.createElement("p");
    const deleteButton = document.createElement("button");

    taskDescription.textContent = task.description;
    deleteButton.textContent = "Delete";
    
    taskItem.classList.add("task-item");

    deleteButton.addEventListener("click", () => {
        completedTaskContainer.removeChild(taskItem);
        completedTasks.set(completedTasks.get().filter((cTask) => cTask.id !== task.id));
    })
    
    taskItem.appendChild(taskDescription);
    taskItem.appendChild(deleteButton);
    completedTaskContainer.appendChild(taskItem);
}

const currentTasksTemp = currentTasks.get();
for(let i = 0 ; i < currentTasksTemp.length; i++){
    addToCurrentTasks(currentTasksTemp[i], false);
}

const completedTasksTemp = completedTasks.get();
for(let i = 0 ; i < completedTasksTemp.length; i++){
    addToCompletedTasks(completedTasksTemp[i], false);
}

function createNewTask(value){
    const task = {
        id: uuidv4(), 
        description: value,
    } 
    addToCurrentTasks(task, true);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(input.value.trim() == ""){
        alert("Input cannot be empty");
        return;
    }
    createNewTask(input.value);
})