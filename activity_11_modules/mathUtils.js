function add(a, b){ // addition function 
    return a + b;
}

function subtract(a, b){ // subtract function
    return a - b;
}

export default function multiply(a, b){ // exporting multiply function using default export
    return a * b;
}

export function divide(a, b){ // exporting divide function using named export
    return a / b;
}

export {add, subtract}; // exporting add, subtract using named export