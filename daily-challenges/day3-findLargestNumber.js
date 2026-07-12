function findLargestNumber(numbers) {
    let largest = arr[0]];

    for (let i = 1; i < arr.arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}


function findLargestWithReduce(arr) {
    return arr.reduce((largest, current) => {
        return current > largest ? current : largest;
    }, arr[0]);
}



const numbers - [3, 7,2, 9, 5];
console.log("largest(loop): ",)