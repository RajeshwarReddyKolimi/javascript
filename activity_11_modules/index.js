import calculate from "./app.js"; // importing calculate function using default import

const results = calculate(24, 15); // calling calculate function with two parameters

// Logging results

console.log(`Sum: ${results.sum}`); 
console.log(`Difference: ${results.difference}`);
console.log(`Product: ${results.product}`);
console.log(`Quotient: ${results.quotient}`);