// Add, subtract, multiply, divide functions

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

console.log(add(8, 2)); // 10
console.log(subtract(8, 2)); // 6
console.log(multiply(8, 2)); // 16
console.log(divide(8, 2)); // 4

// Calculate function to conditionally call add, subtract, multiply, divide

function calculate(a, b, op){
    if(op == "add")
        return add(a, b);
    else if(op == "subtract")
        return subtract(a, b);
    else if(op == "multiply")
        return multiply(a, b);
    else if(op == "divide")
        return divide(a, b);
}


console.log(calculate(8, 2, "add")); // 10
console.log(calculate(8, 2, "subtract")); // 6
console.log(calculate(8, 2, "multiply")); // 16
console.log(calculate(8, 2, "divide")); // 4


// Arrow function to subtract two numbers

((a, b) => console.log(a - b))(8, 2)  // 6

const subtract2 = (a, b) => { 
    return a - b;
}

console.log(subtract2(8, 2)); // 6


// IIFE to reverse a string

((str) => {
    let revStr = "";
    for(let i = str.length - 1; i >=0 ; i--)
        revStr += str[i];
    console.log(revStr);        // emoclew
})("welcome");