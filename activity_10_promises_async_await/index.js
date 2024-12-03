// Promise to implement a delay function

const delayPromise = new Promise((resolve, reject) => { // Creating a promise
    setTimeout(resolve, 1000); // Resolving or fulfilling the promise after a delay
})

delayPromise.then(() => { // When promise is fulfilled
    console.log("Promise executed"); // Output is logged.
})


// Async await to fetch data

async function fetchData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    for(let i = 0; i < 5; i++){
        console.log(data[i]?.title);
    }
}

fetchData();


// Reviewing async-await syntax

// Given promise code

// function getProcessedData(url)  { 
//     return downloadData(url) 
//     .catch(e => {
//         return downloadFallbackData(url) }
//     )
//     .then(v => { 
//         return processDataInWorker(v) 
//     })
// } 


// Rewritten Async-await code

// async function getProcessedData(url){
//     try{
//         const v = await downloadData(url);
//         const data = await processDataInWorker(v);
//         return data;
//     }catch(e){
//         const error = await downloadFallbackData(url);
//         return e; 
//     }

// }



// Promise states

// There are 3 promise states:
// 1. Pending state:
//    The state where the asynchronous operation is still under progress. The promsie is neither finished nor rejected yet. This is the initial state of a promise.
// 2. Fulfilled state:
//    The state where the asynchronous operation is completed successfully. This state is called using the resolve() method.
// 3. Rejected state:
//    The state where the asynchronous operation is failed or there is an error. This state is called using the reject() method.



// Promise to create a delayedLowerCase function

const delayedLowerCasePromise = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000);
})

function delayedLowerCase(input){
    return input.toLowerCase();
}

function getLength(input){
    return input.length;
}

const input = "BEAUTIFUL CODE";

delayedLowerCasePromise
    .then(() => {
        const output = delayedLowerCase(input);
        console.log(output);    // "beautiful code"
    })

// Promise chaining

// Promise chaining allows us to write multiple asynchronous operations in a sequence. It depends on the result of the previous operation. We generally use `.then()` to join multiple promises and make them execute one after other.
// Example:
//      fetchData()
//          .then(() => {})
//          .then(() => {})
//          .then(() => {})
//          .catch((e) => {})



// Updating delayedLowerCasePromise using chaining


delayedLowerCasePromise
    .then(() => {
        const result = delayedLowerCase(input);
        return result;  // "beautiful code"
    })
    .then((result) => {
        const len = getLength(input); // 14
        console.log(`${result} - ${len}`); // "beautiful code - 14"
    })


    