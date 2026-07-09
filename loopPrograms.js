// Print numbers 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(i);
}

// Print even numbers from 1 to 50
for (let i= 1; i<= 50; i++){
    if (i % 2 ===0){
        console.log(i);
    }
}


// fizzbuzz program
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0){
        console.log("Fizz");
    }
    else if (i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}


// print a triangle of stars
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}