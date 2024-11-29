// Declare a variable in global scope and access it within a function and block

var a = 4;
let b = 5;
const c = 6;

{
    console.log(a, b, c) // 4 5 6
}

function globalScopeCheck(){
    console.log(a, b, c) // 4 5 6
}

globalScopeCheck();


// Declare a variable within function and access outside function

function functionScopeCheck(){
    let x = 5;
}

// console.log(x) // Reference Error: x is not defined



// Declare variable using let, const and access outside function

{
    let y = 6;
    const z = 7; 
}

// console.log(y, z); // Reference error : y is not defined



// Demonstrating scope chain

let p = 10;
function outer(){
    let q = 20;
    console.log(p); // 10
    console.log(q); // 20
    // console.log(r); // ReferenceError: r is not defined
    function inner(){
        let r = 30;
        console.log(p); // 10
        console.log(q); // 20
        console.log(r); // 30
    }
    inner();
}

console.log(p) // 10
console.log(q) // ReferenceError: q is not defined
console.log(r) // ReferenceError: r is not defined

outer();