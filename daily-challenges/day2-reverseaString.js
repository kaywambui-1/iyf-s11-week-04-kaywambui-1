const str = "hello";
const reversedStr = str.split("").reverse().join("");

console.log(reversedStr);


function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

// Test
console.log(reverseString("hello")); // Output: "olleh"