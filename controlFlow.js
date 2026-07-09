// Exercise 1: If/Else Statements

function getGrade(score){
    if (score >= 90) {
        return "A";
    }else if (score >= 80) {
        return "B";
    }else if (score >= 70) {
        return "C";
    }else if (score >= 60) {
        return "D";
    }else {
        return "F";
    }
}

console.log(getGrade(95)); // Output: A
console.log(getGrade(85)); // Output: B
console.log(getGrade(75)); // Output: C
console.log(getGrade(65)); // Output: D
console.log(getGrade(55)); // Output: F


// Exercise 2:Switch Statements

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        // ... add remaining days
        default:
            return "Invalid day";
    }
}

console.log(getDayName(0)); // Output: Sunday
console.log(getDayName(1)); // Output: Monday
console.log(getDayName(7)); // Output: Invalid day


// Exercise 3: Loops

    // For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let loopcount = 0;
while (loopcount < 5) {
    console.log(loopcount);
    loopcount++;
}

// For...of (arrays)
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

