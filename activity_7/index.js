function doubleNumbers(arr){
    return arr.map((item) => item * 2);
}


const nums = [1, 2, 3, 4, 5, 6];
console.log(nums) // [1, 2, 3, 4, 5, 6]

const doubleNums = doubleNumbers(nums);

console.log(doubleNums); // [2, 4, 6, 8, 10, 12]
console.log(nums) // [1, 2, 3, 4, 5, 6] // Original arr is not changed



function filterEvenNumbers(arr){
    return arr.filter((item) => item % 2 == 0);
}


const evenNums = filterEvenNumbers(nums);

console.log(evenNums) // [2, 4, 6]
console.log(nums) // [1, 2, 3, 4, 5, 6] // Original arr is not changed



function sumNumbers(arr){
    return arr.reduce((acc, curItem) => acc + curItem, 0);
}

const sum = sumNumbers(nums);

console.log(sum) // 21
console.log(nums) // [1, 2, 3, 4, 5, 6] // Original arr is not changed
