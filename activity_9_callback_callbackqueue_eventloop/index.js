
function callback(index){
    console.log(`Task ${index} completed`);
    if(index + 1 < tasks.length)
        tasks[index + 1](index + 1, callback);
}  


function taskScheduler(tasks){
    tasks[0](0, callback);  // One after other

    // for(let i = 0; i < tasks.length; i++){   // All at a time: small task finishes first
    //     tasks[i](() => console.log(`Task ${i} completed`))   
    // }
}

const tasks = [
    (index, callback) => {
        setTimeout(() => callback(index), 1000);
    },
    (index, callback) => {
        setTimeout(() => callback(index), 3000);
    },
    (index, callback) => {
        setTimeout(() => callback(index), 5000);
    },
    (index, callback) => {
        setTimeout(() => callback(index), 4000);
    },
]

taskScheduler(tasks);