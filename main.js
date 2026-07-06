
console.log("main.js is loaded!")// Variable declarations

let name = "Christine";
let age = 24;
const birthYear = 2002;

// typeof operator
console.log(typeof name);    // string
console.log(typeof age);     // number
console.log(typeof true);    // boolean

// let vs const
let score = 100;
score = 150;  // Works!

const PI = 3.14159;
// PI = 3;  // Error! const cannot be reassigned

//Exercise: Variable Practice
let isStudent = true;
let favoriteColors = ["pink" , "purple" , "turquoise"];
let today = new Date();

console.log("My name is:", name);
console.log("my age is:", age);
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", today);
