// +++++++++++++++++++++++++ EASIEST LEVEL +++++++++++++++++++++++++++++
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1) Write a function that returns the sum of two numbers⭐
const sum = (num1, num2) => {
  return `the sum of ${num1} and ${num2} is ${num1 + num2}`;
};
console.log(sum(9, 7));

//2) Create an array and find the length of the array⭐
let array = ["HTML", "CSS", "JS", "TS", "Python", "Java", "C", "C++"];
console.log(array.length);

// 3) Write a function that takes a string and returns it in uppercase.⭐
const Uppercase = (str) => {
  return str.toUpperCase();
};
console.log(Uppercase("hooriya"));

// 4) Create a function that checks if a number is even or odd.⭐
const evenOrOdd = (num) => {
  if (num % 2 == 0) {
    return `${num} is even number`;
  } else {
    return `${num} is odd number`;
  }
};
console.log(evenOrOdd(8));
console.log(evenOrOdd(9));

// 5) Create an array and remove the first element using a method.⭐
let countries = ["Pakistan", "Bangladesh", "Turkey", "Saudi Arabia"];
console.log(countries);
countries.shift();
console.log(countries);

// 6) Write a function that reverses a string.⭐
const reverseString = (str) => {
  str = str.split("").reverse().join("");
  return str;
};

console.log(reverseString("JavaScript"));

// 7) Create a function that checks if a string is a palindrome.⭐
const palindrome = (str) => {
  if (str == str.split("").reverse().join("")) {
    return `${str} is plaindrome`;
  } else {
    return `${str} is not a palindrome`;
  }
};

console.log(palindrome("madam"));
console.log(palindrome("apple"));

// 8) Write a loop that prints numbers from 1 to 10.⭐
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 9) Create an object with at least three properties and print one of them.⭐
const myIntro = {
  name: "Hooriya",
  services: "frontend development",
  skills: ["HTML", "CSS", "JS", "GSAP", "Locomotive.JS", "Lenis"],
  experience: "fresher",
};
console.log(myIntro.skills);

// 10) Create a function that calculates the average of numbers in an array.⭐
const totalSum = arrayNumbers.reduce((acc, currVal) => acc + currVal, 0);
const averageNum = totalSum / arrayNumbers.length;
console.log(averageNum);

// 11) Write a function that concatenates two strings⭐
const concatStrs = (str1, str2) => {
  return `${str1} ${str2}`;
};
console.log(concatStrs("hello", "world"));

// 12) Create a function that finds the index of a specific element in an array⭐
let idx = ["apple", "mango", "banana", "orange", "grapes"];
const findIndex = (elem) => {
  console.log(idx.indexOf(elem));
};

findIndex("orange");

// 13) Write a function that returns the square of a number.⭐
const squareOfNumber = (num) => {
  return `Square of ${num} is : ${num ** 2}`;
};
console.log(squareOfNumber(8));

// 14) Create a function that filters out negative numbers from an array.⭐
let newArr = [1, 2, 3, 0, -2, -3, -9, -10];
const negativeNumbers = newArr.filter((elem) => elem < 0);
console.log(negativeNumbers);

// 15) Write a loop that prints the multiplication table of a given number.⭐
const table = (num) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
};
table(14);

// 16) Create a function that merges two arrays.⭐
const mergeArrays = (arr1, arr2) => {
  return arr1.concat(arr2);
};
console.log(mergeArrays([5, 6, 7, 8], [9, 10, 11]));

// 17) Write a function that counts the number of vowels in a string ⭐
const countVowels = (str) => {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  letters = str.split("");
  letters.forEach((elem) => {
    if (vowels.includes(elem)) {
      count++;
    }
  });
  console.log(`the number of vowels is : ${count}`);
};
countVowels("JavaScript");

// 18) Sum of an Array: Write a function that takes an array of numbers and returns the sum of all the elements.⭐
const sumOfAllElements = arrayNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sumOfAllElements);

// 19) Write a function celsiusToFahrenheit that takes a Celsius temperature and converts it to Fahrenheit.
// Formula: (Celsius * 9/5) + 32 = Fahrenheit⭐
function celsiusToFahrenheit(number) {
  let a = (number * 9) / 5;
  let finalOutcome = a + 32;
  return finalOutcome;
}
console.log(celsiusToFahrenheit(30));
console.log(celsiusToFahrenheit(40));

/**
 * 20) FizzBuzz Problem: Print numbers from 1 to 50, but:

If a number is divisible by 3, print "Fizz"
If a number is divisible by 5, print "Buzz"
If a number is divisible by both 3 and 5, print "FizzBuzz"
 */

function fizzBuzz() {
  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} Fizz Buzz!!`);
    } else if (i % 5 === 0) {
      console.log(`${i} Buzz`);
    } else if (i % 3 === 0) {
      console.log(`${i} Fizz`);
    }
  }
}
fizzBuzz();

//21)Find the Maximum Number: Write a function that takes an array of numbers and returns the largest number.
function largestNumber(num) {
  let max = num[0];
  num.forEach((elem) => {
    if (elem > max) {
      max = elem;
    }
  });

  return max;
}

console.log(largestNumber([2, 7, 8, 90, 3, 4, 5]));

// 22)Remove Duplicates from an Array: Write a function that removes duplicate values from an array.
function duplicateNumber(num) {
  let duplicate = num[0];
  num.forEach((elem) => {
    if (elem === duplicate) {
      duplicate = elem;
    }
  });
  return duplicate;
}

console.log(duplicateNumber([2, 3, 5, 7, 8, 2,]));