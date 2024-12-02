// Implementation of Queue class

class Queue{
    constructor(){
        this.q = [];
    }
    enqueue(item){
        this.q.push(item);
    }
    dequeue(){
        return this.q.shift();
    }
    front(){
        return this.isEmpty() ? undefined : this.q[0];
    }
    isEmpty(){
        return this.length === 0;
    }
}

const q = new Queue();

console.log(q); // {q: []}
console.log(q.isEmpty()); // true

q.enqueue(2);
console.log(q); // {q: [2]}
q.enqueue(4);
console.log(q); // {q: [2, 4]}
q.enqueue(5);
console.log(q); // {q: [2, 4, 5]}
q.enqueue(7);
console.log(q); // {q: [2, 4, 5, 7]}

console.log(q.front()); // 2
console.log(q.isEmpty()); // false
console.log(q.dequeue()); // 2
console.log(q); // {q: [4, 5, 7]}

console.log(q.front()); // 4
console.log(q.isEmpty()); // false
console.log(q.dequeue()); // 4
console.log(q); // {q: [5, 7]}


console.log(q.front()); // 5
console.log(q.isEmpty()); // false



// instanceof operator

// instanceof operator returns true if an object is an instance of the mentioned class. 
// Ex: 
    class Parent{
        wish(){
            console.log("Wish");
        }
    }
    class Child extends Parent{
        wishAgain(){
            console.log("Wish again");
        }
    }
    const p = new Parent();
    const c = new Child();
    console.log(p instanceof Parent); // true
    console.log(c instanceof Parent); // true
    console.log(p instanceof Child); // false
    console.log(c instanceof Child); // true

// instanceof tells if an object is part of objects prototype chain