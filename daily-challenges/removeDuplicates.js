
function removeDuplicates(arr){
    return [...new Set(arr)];
    
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));


function removeDuplicates(arr){
    return arr.filter((value, index)) =>
        arr .index(value) === index);
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicate(numbers))