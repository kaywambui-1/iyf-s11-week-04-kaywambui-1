// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

console.log(greet("Christine")); // Output: Hello, Christine!
console.log(add(5, 3)); // Output: 8
console.log(multiply(4, 6)); // Output: 24
console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: Cannot divide by zero