// Inventory Management system

let inventory = [];

function addProduct(product){
    inventory.push(product)
}

function removeProduct(productName){
    const product = inventory.find((product) => product?.name === productName);
    inventory = inventory.filter((product) => product?.name != productName);
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