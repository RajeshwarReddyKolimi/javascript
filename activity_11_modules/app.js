import multiply, {add, subtract, divide} from "./mathUtils.js";

export default function calculate(a, b) { // exporting calculate using default export
    return { // Returning the result in object format
        sum: add(a, b),
        difference: subtract(a, b),
        product: multiply(a, b),
        quotient: divide(a, b)
    }
}