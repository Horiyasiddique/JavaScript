// //question 01
// // Problem: Write a function called 'reverseString' that takes a string as an argument and returns the string reversed.
// // Example Input: "hello"
// // Example Output: "olleh"
// function reverseString(word) {
//   return word.split("").reverse().join("");
// }

// console.log(reverseString("JavaScript"));

// //Question 2
// // Write a function isPalindrome that takes a string and returns true if it's a palindrome (reads the same backward and forward) and false otherwise.
// // Example Input: "madam"
// // Example Output: true

// function isPalindrome(str) {
//   if (str.split("").reverse().join("") == str) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// isPalindrome("121");
// isPalindrome("hello");
// isPalindrome("JavaScript");
// isPalindrome("madam");
// isPalindrome("maham");

// //Question 3
// //Write a function findLargest that takes an array of numbers and returns the largest number in the array,
// function findLargest(arr) {
//   if (arr.length === 0) {
//     return null;
//   }

//   let largest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (largest < arr[i]) {
//       largest = arr[i];
//     }
//   }

//   return largest;
// }

// console.log(findLargest([1, , 98, 76, 56, 2, 3, 0]));

// //Question 4
// // Write a function celsiusToFahrenheit that takes a Celsius temperature and converts it to Fahrenheit.
// // Formula: (Celsius * 9/5) + 32 = Fahrenheit
// // Example Input: 30
// // Example Output: 86
// function celsiusToFahrenheit(number) {
//   let a = (number * 9) / 5;
//   let finalOutcome = a + 32;
//   return finalOutcome;
// }

// console.log(celsiusToFahrenheit(30));
// console.log(celsiusToFahrenheit(40));

// //Question 05
// // Write a function countVowels that takes a string and returns the number of vowels (a, e, i, o, u) in the string.
// // Example Input: "hello world"
// // Example Output: 3

// function countVowels(str){

// }

function pyramidPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    const spaces = " ".repeat(rows - i);
    const stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

pyramidPattern(10)
