# TASK TRACKER

## Features

- Add tasks.
- Delete tasks.
- Mark tasks as completed.
- Persists data on reload.

## Technologies used

- HTML
- CSS
- JavaScript (DOM manipulation, event handling, localStorage, classes, functions, etc.)
- uuid for generating unique ids for tasks.

## Steps

<!-- - User enters a task in the form and submits.
- This operations calls the `createNewTask` function.
- The `createNewTask` creates a `task` object consisting of an `id`, `description`.
- This `task` object and a boolean value are passed to `addToCurrentTasks()`.
- This boolean value is taken as `shouldAddToArray` and if it is true the task will be added -->

- Created two objects `currentTasks`, `completedTasks` of `TasksContainer` class.
- They store array of current tasks and completed tasks.
- On submitting the task creation form, `createNewTask` function is called.
- It creates a new task object with an `id` using `uuid` and a `description`.
- This task object is passed as a parameter to `addToCurrentTasks` function.
- The `addToCurrentTasks` also accepts a boolean value `shouldAddToArray` to ensure the `task` is rendered
