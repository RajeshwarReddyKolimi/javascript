# Task Scheduler

## Steps

- Created a `taskScheduler` function which accepts an array of functions as argument.
- Created an array `tasks` which contains the task functions.
- Each task function accepts an `index` and `callback` as arguments. Each task function has a `setTimeout` function with varying delays which calls the `callback` function when finished.
- The `taskScheduler` method invokes the first function in the `tasks` array. `index` and `callback` function are passed as parameters.
- The callback function is responsible for logging `Task completed` and calling the next function in the `tasks` array using the `index` we shared as argument.
- This goes on until `index < tasks.length`.
- In this way the tasks will be executed in sequential order.
- If we want to execute these functions asynchronously, instead of nesting the callbacks, we can use a simple for loop. The order of finishing execution will be increasing order of the delays in `setTimeout` function.
- Here the concept of "callbacks", "higher order functions", "event loop" are applied.
