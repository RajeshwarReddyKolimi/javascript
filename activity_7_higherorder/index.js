const nums = [1, 2, 3, 4, 5, 6];


// Map

function doubleNumbers(arr){
    return arr.map((item) => item * 2);
}

console.log(nums) // [1, 2, 3, 4, 5, 6]

const doubleNums = doubleNumbers(nums);

console.log(doubleNums); // [2, 4, 6, 8, 10, 12]
console.log(nums) // [1, 2, 3, 4, 5, 6] // Original arr is not changed


// Filter

function filterEvenNumbers(arr){
    return arr.filter((item) => item % 2 == 0);
}

const evenNums = filterEvenNumbers(nums);

console.log(evenNums) // [2, 4, 6]
console.log(nums) // [1, 2, 3, 4, 5, 6] // Original arr is not changed


// Reduce

function sumNumbers(arr){
    return arr.reduce((acc, curItem) => acc + curItem, 0);
}

const sum = sumNumbers(nums);

console.log(sum) // 21
console.log(nums) // [1, 2, 3, 4, 5, 6] // Original arr is not changed



// Custom Iterator


function higherOrder(){
    return (start, end, step) => {
        const arr = [];
        let cur = start;
        while(cur <= end){
            arr.push(cur);
            cur += step;
        }
        return arr; 
    }
}

const iterator = higherOrder();

console.log(iterator(1, 15, 4)); // [1, 5, 9, 13]