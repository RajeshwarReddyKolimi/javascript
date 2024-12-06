import { v4 as uuidv4 } from "uuid"

// Varibles for HTML elements
const taskForm = document.querySelector("form");
const taskInput = document.querySelector("input");
const currentTaskContainer = document.querySelector(".current-tasks-container")
const completedTaskContainer = document.querySelector(".completed-tasks-container")

// TasksContainer class to get and set localStorage
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

// Adding tasks in localStorage on a refresh to HTML
(() => {
    let temp = currentTasks.get();
    for(let i = 0 ; i < temp.length; i++)
        addToCurrentTasksHTML(temp[i]);
    
    temp = completedTasks.get();
    for(let i = 0 ; i < temp.length; i++){
        addToCompletedTasksHTML(temp[i]);
    }
})();

// Updates localStorage when a new task is created 
function addToCurrentTasks(task){
    let temp = currentTasks.get();
    temp.push(task);
    currentTasks.set(temp);
}

// Adds the task to HTML
function addToCurrentTasksHTML(task){
    const taskItem = createTaskHTML(task, true);
    currentTaskContainer.appendChild(taskItem);
}

// Updates localStorage when a task is marked as complete 
function addToCompletedTasks(task){
    let temp = completedTasks.get();
    temp.push(task);
    completedTasks.set(temp);
}

// Adds the task to HTML
function addToCompletedTasksHTML(task){
    const taskItem = createTaskHTML(task, false);
    completedTaskContainer.appendChild(taskItem);
}

// Delete the tasks from currentTasks
function deleteFromCurrentTasks(task, taskItem){
    currentTaskContainer.removeChild(taskItem);
    currentTasks.set(currentTasks.get().filter((cTask) => cTask.id !== task.id));
}

function deleteFromCompletedTasks(task, taskItem){
    completedTaskContainer.removeChild(taskItem);
    completedTasks.set(completedTasks.get().filter((cTask) => cTask.id !== task.id));
}

function createTaskHTML(task, isCurrent){
    
    // Task Item
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    // Task Description
    const taskDescription = document.createElement("p");
    taskDescription.textContent = task.description;
    taskItem.appendChild(taskDescription);
    
    // Mark as complete button
    if(isCurrent){
        const completeButton = document.createElement("button");
        completeButton.textContent = "Mark as completed";
        completeButton.addEventListener("click", () => {
            deleteFromCurrentTasks(task, taskItem);
            addToCompletedTasks(task);
            addToCompletedTasksHTML(task);
        })
        taskItem.appendChild(completeButton);
    }

    // delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        if(isCurrent)
            deleteFromCurrentTasks(task, taskItem)
        else    
            deleteFromCompletedTasks(task, taskItem);
    })
    taskItem.appendChild(deleteButton);

    // Resetting input
    taskInput.value = "";

    return taskItem;
}

function createNewTask(value){
    const task = {
        id: uuidv4(), 
        description: value,
    } 
    addToCurrentTasks(task);
    addToCurrentTasksHTML(task);
}

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(taskInput.value.trim() == ""){
        alert("Input cannot be empty");
        return;
    }
    createNewTask(taskInput.value);
})