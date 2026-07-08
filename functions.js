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

// exercise 2: building functions

function calculateArea(width, height){
    return width * height;
}
console.log(calculateArea(10, 20)); // Output: 200



function celciusToFarenheit(celcius){
    return (celcius * 9/5) + 32;
}

console.log(celciusToFarenheit(30)); // Output: 86


function isEven(num){
    return num % 2 === 0;
}

console.log(isEven(6)); // Output: true
console.log(isEven(7)); // Output: false


function getInitials(firstName, lastName){
    return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
}

console.log(getInitials("Christine", "Kamau")); // Output: CK



function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: olleh


// Exercise 3: Default Parameters

function calculateTip(billAmount, tipPercentage = 15){
    return billAmount * (tipPercentage /100);
}

console.log(calculateTip(100)); // Output: 15
console.log(calculateTip(100, 20)); // Output: 20
console.log(calculateTip(200)); // Output: 30
