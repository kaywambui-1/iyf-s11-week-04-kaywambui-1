// Creating arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

// Accessing elements
console.log(fruits[0]);     // apple
console.log(fruits.length); // 3

// Modifying arrays
fruits.push("grape");        // Add to end
console.log(fruits);

fruits.unshift("mango");     // Add to start
console.log(fruits);

fruits.pop();                // Remove from end
console.log(fruits);

fruits.shift();              // Remove from start
console.log(fruits);


// Array Methods
const numbers = [1, 2, 3, 4, 5];

// forEach - do something with each element
numbers.forEach(num => console.log(num * 2));

// map - transform each element
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter - keep elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// find - get first element that passes test
const firstEven = numbers.find(num => num % 2 === 0);
console.log("First Even Number:", firstEven);

// reduce - combine all elements
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// includes - check if element exists
console.log(numbers2.includes(3)); // true


// build Exercise

// double all numbers in an array
const nums1 = [2, 4, 6, 8];
const doubledNums = nums1.map(num => num * 2);
console.log("Doubled Numbers:", doubledNums);

// filter out negative numbers
const nums2 = [-5, 8, -2, 10, 3, -1];
const positiveNums = nums2.filter(num => num >= 0);
console.log("Positive Numbers:", positiveNums);

// find the first number greater than 10
const nums3 = [3, 7, 12, 15, 20];
const firstGreaterthan10 = nums3.find(num => num > 10);
console.log("First Number Greater Than 10:", firstGreater);

// calculate the product of all numbers
const nums4 = [2, 3, 4, 5];
const product = nums4.reduce((total, num) => total * num, 1);
console.log("Product of All Numbers:", product);


// Objects basics

// Exercise:Creating objects
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "New York",
        country: "USA"
    }
};

// Accessing properties
console.log(person.firstName);         // Dot notation
console.log(person["lastName"]);       // Bracket notation
console.log(person.address.city);      // Nested

// Modifying properties
person.age = 31;
person.email = "john@example.com";     // Add new property
delete person.isStudent;               // Remove property


// Exercise 2: Object methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    // Shorthand method syntax
    subtract(a, b) {
        return a - b;
    },
    // Arrow function
    multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(10, 4));
console.log(calculator.multiply(6, 7));


// Exercise 3: Iterating over objects
const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get keys
console.log(Object.keys(scores));   // ["math", "english", "science"]

// Get values
console.log(Object.values(scores)); // [95, 88, 92]

// Get entries
console.log(Object.entries(scores)); // [["math", 95], ["english", 88], ...]

// Loop through
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}



// Array of objects

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// Your tasks - use array methods:

// 1. Get all student names
const names = students.map(student=> student.name);
console.log("Names:" , names);

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log("High Achievers:" , highAchievers);

// 3. Find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");
console.log("Charlie:" , charlie);

// 4. Calculate average grade
const avgGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
console.log("Average Grade:" , avgGrade);

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log("CS Majors:" , csMajors);

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log("Sorted by Grade:" , sortedByGrade);
// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);
console.log("Has Top Student:" , hasTopStudent);

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);
console.log("All Passing:" , allPassing);