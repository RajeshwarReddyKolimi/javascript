// var, let, const  

var counter1 = 0;
console.log(counter1);
var counter1 = 1; // No error
console.log(counter1);
counter1 = 2; // No error
console.log(counter1);

let counter2 = 0;
console.log(counter2);
// let counter2 = 1; // Syntax error: counter2 has already been declared
console.log(counter2);
counter2 = 2; // No error
console.log(counter2);

const counter3 = 0;
console.log(counter3);
// const counter3 = 0; // Syntax error: counter3 has already been declared
console.log(counter3);
// counter3 = 0; // Type error: Assignment to constant variable
console.log(counter3);


// Data types: Number, boolean, string, array, object

let count = 0;
console.log(count);

let isValid = true;
console.log(isValid);

let str = "Welcome"; 
console.log(str);

const arr = [1, 2, 3];
console.log(arr);

const obj = {
    id: "1",
    name: "Raju",
    role: "User"
}
console.log(obj);


// Operators

let a = 1, b = 0, c = 1;
let x = true, y = false;
let s1 = "Welcome", s2 = "JS", s3 = "JS";

console.log(a + a) // 2
console.log(a - a) // 0
console.log(a * a) // 1
console.log(a / a) // 1
console.log(a % a) // 0
console.log(a >> a) // 0
console.log(a << a) // 2
console.log(a >>> a) // 0
console.log(c++) // 1
console.log(c) // 2
console.log(--c) // 1

console.log(a > c) // false
console.log(a < c) // false
console.log(a >= c) // true
console.log(a <= a) // true
console.log(a == c) // true
console.log(a === c) // true

console.log(a & a) // 1
console.log(a | a) // 1
console.log(a ^ a) // 0
console.log(a & b) // 0
console.log(a | b) // 1
console.log(a ^ b) // 1

console.log(x) // true
console.log(!x) // false
console.log(x && x) // true
console.log(x && y) // false
console.log(x || x) // true
console.log(x || y) // true

// Conditional statements

if(a == 0)
    console.log("True");
else
    console.log("False");
// False


// String

console.log(s1 + s2); // WelcomeJS
console.log(s1 + " " + s2); // Welcome JS
console.log(`${s1} ${s2}`); // Welcome JS
console.log(s2 == s3); // true
console.log(s2 === s3); // true 
console.log(s1.substring(3)) // come
console.log(s1.slice(3)) // come
console.log(s1.slice(-1)) // e
console.log(s1.length) // 7

// Conversion

const p = "123", q = "";

console.log(p); // "123";
console.log(+p) // 123;
console.log(Number(p)) // 123

console.log(a + p) // "1123"
console.log(a + Number(p)) // 124
console.log(a + +p) // 124

console.log(p + a) // "1231"
console.log(+p + a) // 124

console.log(String(a)) // "1"
console.log(+q) // 0
console.log(Boolean(a)) // true
console.log(Boolean(p)) // true
console.log(Boolean(q)) // false