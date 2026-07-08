//approximate age calculator
let ageInDays = age * 365;
ageInHours = ageInDays * 24;

//current year
let currentYear = new Date().getFullYear();
let yearTurn100 = currentYear + (100 - age);

//Display the results
console.log("my age is: "  + age + " years");
console.log("my age in days is: " + ageInDays);
console.log("my age in hours is: " + ageInHours);
console.log("I will turn 100 in the year: " + yearTurn100);