// ++++++++++++ start 12 - March - 2025 ++++++++++++++++

/**
 * Day 1: Basic JavaScript Questions
 1️⃣Write a JavaScript program to print "Hello, World!" to the console.

 2️⃣Write a function that takes two numbers as input and returns their sum.

 3️⃣Write a program to check if a number is even or odd.

 4️⃣Write a function that takes a string as input and returns its length.

 5️⃣Write a program to find the largest number among three numbers.
 */

//  SOLUTION 01
console.log("Hello World 👋");

//SOLUTION 02
const sum = (num1, num2) => {
  return ` the sum of ${num1} and ${num2} is ${num1 + num2}`;
};
console.log(sum(2, 3));

//SOLUTION 03
const evenOrOdd = (num) => {
  return num % 2 === 0 ? `${num} is an Even Number` : `${num} is an Odd Number`;
};

console.log(evenOrOdd(12));
console.log(evenOrOdd(21));

//Solution 04
const checkLength = (str) => {
  return `${str} contains ${str.length} letters`;
};

console.log(checkLength("hello"));

//Solution 05
const largestNumber = (num1, num2, num3) => {
  let largest = num1;
  if (num2 > largest) {
    largest = num2;
  }
  if (num3 > largest) {
    largest = num3;
  }
  return largest;
};

console.log(largestNumber(1, 2, 8));

/**
 * Day 2: Basic JS Questions
 *  6️⃣ Create a program that uses variables to store your name and age, then print them using a template literals
 * 7️⃣ Create an object called person with properties name, age, and city. Print the object to the console.
 * 8️⃣  Create an array called fruits with at least 3 fruit names. Print the second fruit in the array.
 * 9️⃣ Write a program to find the length of an array. Use the array [10, 20, 30, 40, 50].
 * 🔟 Using the person object from question 2, print the value of the city property.
 * 1️⃣1️⃣ Write a function to check if a number is positive, negative, or zero.
 * 1️⃣2️⃣ Write a program to reverse a string (e.g., "hello" → "olleh").
 * 1️⃣3️⃣ Write a function to check if a string is a palindrome (e.g., "madam" → true).
 */

//Solution 06
let name = "Hooriya Siddiqui";
let age = 14;
console.log(`I am ${name}and I am ${age} years old Software Engineer `);

//Solution 07
const Person = {
  name: "Ayesha Khan",
  age: 15,
  city: "Karachi",
};

console.log(Person);

//Solution 08
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits["1"]);

//Solution 09
let arr = [10, 20, 30, 40, 50];
console.log(arr.length);

//Solution 10
console.log(Person.city);

//Solution 11
const positiveOrNegative = (num) => {
  if (num > 0) {
    return `${num} is a positive integer`;
  } else if (num === 0) {
    return `${num} is neutral`;
  } else {
    return `${num} is a negative integer`;
  }
};

console.log(positiveOrNegative(3));
console.log(positiveOrNegative(-5));
console.log(positiveOrNegative(0));

//Solution 12
const reverseStr = (str) => {
  let result = str.split("").reverse().join("");
  return result;
};

console.log(reverseStr("hello"));
console.log(reverseStr("JavaScript"));

//Solution 13
const isPalindrome = (str) => {
  let result = str.split("").reverse().join("");
  return result === str ? `${str} is palindrome` : `${str} is not palindrome`;
};

console.log(isPalindrome("madam"));
console.log(isPalindrome("juice"));

/**
 * Day 3: Basic JS Questions
 * 1️⃣4️⃣Create an array called numbers. Print the array to the console.
 * 1️⃣5️⃣From the numbers array, print the third element (index 2).
 * 1️⃣6️⃣Add the number to the end of the numbers array. Print the updated array.
 * 1️⃣7️⃣Remove the last element from the numbers array. Print the updated array.
 * 1️⃣8️⃣Add the number 5 to the beginning of the numbers array. Print the updated array.
 * 1️⃣9️⃣Remove the first element from the numbers array. Print the updated array.
 * 2️⃣0️⃣Find the index of the number 30 in the numbers array. Print the index.
 * 2️⃣1️⃣Create a new array called slicedArray that contains elements from index 1 to 3 of the numbers array. Print the new array.
 * 2️⃣2️⃣Create a new array called doubledNumbers where each element of the numbers array is multiplied by 2. Print the new array.
 * 2️⃣3️⃣Check if the number 40 exists in the numbers array. Print true if it exists, otherwise print false.
 * 2️⃣4️⃣ Use the filter() method to create a new array called evenNumbers that contains only the even numbers from the numbers array. Print the new array.
 * 2️⃣5️⃣ Use the reduce() method to calculate the sum of all elements in the numbers array. Print the sum.
 * 2️⃣6️⃣Sort the array [3, 1, 4, 1, 5, 9, 2, 6, 5] in ascending order.
 *2️⃣7️⃣Sort the array ["Zebra", "Apple", "Mango", "Banana"] in alphabetical order.
 *2️⃣8️⃣Check if all elements in the array [10, 20, 30, 40] are greater than 5.
 *2️⃣9️⃣Check if all elements in the array [18, 22, 17, 25] are greater than or equal to 18.
 */

//Solution 14
let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);

//Solution 15
console.log(numbers[2]);

//Solution 16
numbers.push(60);
console.log(numbers);

//Solution 17
numbers.pop();
console.log(numbers);

//Solution 18
numbers.unshift(0);
console.log(numbers);

//Solution 19
numbers.shift();
console.log(numbers);

//Solution 20
console.log(numbers.indexOf(5));

//Solution 21
let slicedArr = numbers.slice(1, 3);
console.log(slicedArr);

//Solution 22
let doubleArr = numbers.map((item) => {
  return item * 2;
});
console.log(doubleArr);

//Solution 23
console.log(numbers.includes(3));
console.log(numbers.includes(30));

//Solution 24
let filteredArray = numbers.filter((item) => {
  return item % 2 === 0;
});
console.log(`Even numbers from numbers array are : ${filteredArray}`);

//Solution 25
let reducedArray = numbers.reduce((prevVal, currVal) => {
  let results = prevVal + currVal;
  return results;
});

console.log(reducedArray);

//Solution 26
let array2 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(array2.sort((a, b) => a - b));

//Solution 27
let strArray = ["Zebra", "Apple", "Mango", "Banana"];
console.log(strArray.sort());

let array3 = [10, 20, 30, 40];
let allGreaterThanFive = array3.every((elem) => {
  return elem > 5;
});
console.log(allGreaterThanFive);

//Solution 28
let array4 = [18, 22, 17, 25];
let allGreaterThanOrEqualToEighteen = array4.every((elem) => {
  return elem >= 18;
});

console.log(allGreaterThanOrEqualToEighteen);

/**
 * Day : 04
 *3️⃣0️⃣Create an object called man with the following properties: name: "Ali", age: 25, city: "Karachi". Print the object to the console.
 *3️⃣1️⃣From the man object, print the value of the name property.
 *3️⃣2️⃣ Add a new property called country with the value "Pakistan" to the man object. Print the updated object.
 *3️⃣3️⃣Change the age property of the man object to 30. Print the updated object
 *3️⃣4️⃣Delete the city property from the man object. Print the updated object.
 *3️⃣5️⃣ Nested Objects : Create an object called student with the following properties: name: "Sara", age: 22, address: An object with city and country properties. Print the student object.
 *3️⃣6️⃣ Add a method called greet to the man object that prints:"Hello, my name is [name] and I am [age] years old." Call the method and print the output.
 *3️⃣7️⃣Create 2 objects . Merge them into a single object called mergedObj. Print the merged object.
 */

//Solution 30
let man = {
  name: "Ali",
  age: 25,
  city: "Karachi",
};
console.log(man);

//Sloution 31
console.log(man.name);

//Solution 32
man.country = "Pakistan";
console.log(man);

//Solution 33
man.age = 30;
console.log(man);

//Solution 34
delete man.city;
console.log(man);

//Solution 35

let student = {
  name: "Hooriya",
  age: 15,
  class: 9,
  address: {
    city: "Karachi",
    country: "Pakistan",
    sector: "12/L",
    street: 3,
  },
};

console.log(student);

//Solution 36
man.greet = () => {
  console.log(
    `Asslam -  Alaikum 🤝🏻 I am  ${man.name}. I am ${man.age} years old `
  );
};
man.greet();

//Solution 37
let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  c: 3,
  d: 4,
};

let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
