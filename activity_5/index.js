// Implementing counter using closure

function createCounter(){ 
    let count = 0; 

    function increment(){
        count++;
        return count;
    }

    function decrement(){
        count--;
        return count;
    }

    return {increment, decrement};
}

const {increment, decrement} = createCounter();

// console.log(count) // ReferenceError: count is not defined
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3

console.log(decrement()); // 2 
console.log(decrement()); // 1
console.log(decrement()); // 0



// Guess the output


// Question: 1

var a = 12;
(function () {
  console.log(a);
})();

// My answer: 12
// Actual answer: 12



// Question: 2

var a = 5;
(function () {
  var a = 12;
  console.log(a);
})();

// My answer: 12
// Actual answer: 12


// Question: 3

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    console.log(a);
  };
})();
x();

// My answer: 12
// Actual answer: 12


// Question: 4

var a = 10;
var x = (function () {
  var y = function () {
    var a = 12;
  };
  return function () {
    console.log(a);
  };
})();
x();

// My answer: 10
// Actual answer: 10


// Question: 5

var a = 10;
var x = (function () {
  (function () {
    a = 12; // <<< look carefully at this line.
  })();
  return function () {
    console.log(a);
  };
})();
x();

// My answer: 12
// Actual answer: 12


// Question: 6

var a = 10;
(function () {
  var a = 15;
  window.x = function () {
    console.log(a);
  };
})();
x();

// My answer: 15
// Actual answer: 15