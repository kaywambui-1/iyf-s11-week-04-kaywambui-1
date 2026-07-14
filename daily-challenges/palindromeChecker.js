function isPalindrome(str) {
  if (typeof str !== 'string') return false;
  
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  // Reverse and compare
  const reversedString = cleanedString.split("").reverse().join("");
  
  return cleanedString === reversedString;
}

// Test cases
console.log(isPalindrome("racecar"));                    // true
console.log(isPalindrome("hello"));                     // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("A man, a plan, a canal – Panama!")); // true
console.log(isPalindrome("Was it a rat I saw?"));       // true
console.log(isPalindrome("12321"));                     // true