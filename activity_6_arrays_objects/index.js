// Inventory Management system

let inventory = [];

function addProduct(product){
    inventory.push(product)
}

function removeProduct(productName){
    const productIndex = inventory.findIndex((prod) => prod?.name === productName);
    const product = inventory?.[productIndex];
    inventory.splice(productIndex, 1);
    // inventory = inventory.filter((product) => product?.name != productName);
    return product;
}

function updateQuantity(productName, newQuantity){
    const currentProductId = inventory.findIndex((product) => product.name == productName);
    if(currentProductId != -1)
        inventory[currentProductId].quantity = newQuantity;
}

function calculateTotalValue(){
    let totalValue = 0;
    for(let product of inventory){
        totalValue += product.quantity * product.price;
    }
    return totalValue;
}

function listProducts(){
    for(let product of inventory){
        console.log(product.name, product.price, product.quantity);
    }
}



console.log(inventory) // []

addProduct({
    name: "P1",
    price: 999,
    quantity: 1000
})

console.log(inventory) // {name: "P1", price: 999, quantity: 1000}

console.log(removeProduct("P1")); // {name: "P1", price: 999, quantity: 1000}
console.log(inventory) // []

addProduct({
    name: "P2",
    price: 1999,
    quantity: 500
})

console.log(inventory) // {name: "P2", price: 1999, quantity: 500}

updateQuantity("P2", 200);
console.log(inventory) // {name: "P1", price: 999, quantity: 200}

listProducts(); // P2 1999 200

console.log(calculateTotalValue()) // 399800








// Reversing a for loop

const arr = [1, 2, 3, 4, 5, 6];

for(let i = 0; i < arr.length / 2; i++){
    const temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
}

console.log(arr); // [6, 5, 4, 3, 2, 1]


// Difference between for...of and for...in loops

// for...of loop is used with arrays to iterate through the array elements. At each iteration, the variable itself is the element.
// Ex:
    const nums = [1, 2, 3, 4];
    for(let num of nums)
        console.log(num); // Here num represents the current element

// for...in loop is used with objects to iterate through the object keys. At each iteration, the variable is the key of that property.
// Ex:
    const obj = {
        "name": "Raj",
        "age": 23,
        "id": 98
    }
    for(let key in obj)
        console.log(key, obj[key]); // Here num represents the current properties key

// We can use for...in loop with arrays. In this case the indexes will be considered as keys and elements as values
    for(let ind in nums)
        console.log(ind, nums[ind]); // Here ind represents the current index

// We cannot use for...of with objects. It throws obj is not iterable

    // for(let key of obj)
    //     console.log(key, obj[key]); // TypeError: obj is not iterable