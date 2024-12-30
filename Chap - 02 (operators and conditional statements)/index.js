// Arithmatic operator

let a = 2;
let b = 3;
console.log("a + b = " , a + b);
console.log("a - b = " , a - b);
console.log("a * b = " , a * b);
console.log("a / b = " , a / b);
console.log("a % b = " , a % b);
console.log("a ** b = " , a ** b);

//Unary operators
// 1)  post increment
console.log(a++);
console.log(a);

// 2) post decrement
console.log(a--);
console.log(a);

// 3) pre incremet
console.log(++a);

// 4) pre decrement
console.log(--a);

//Assignment operators 

let c = 5;
let d = 7;
let e =+ c + d; // it means  (c + d ) = e or 5 + 7 = e which is equal to 12
console.log(e); // 12

let f =- c - d; //it means (c - d) = f or 5 - 7 = f which is equal to -2
console.log(f); //-2

//LOGICAL OPERATORS
//logical and operators [all condition should be fulfilled]

let num1 = 5;
let num2 = 6;

console.log(num1 <= 5 && num2 > num1); // true
console.log(num1 < num2 && num2 === "16"); //false

//Logical or operators [any one condition should be fulfilled]

console.log(num1 > num2 || num2 > num1)  //true
console.log(num1 > num2 || num2 < num1) //false

//logical not operator

console.log(!(num1 < num2)); //false
console.log(!(num1 > num2)); //true

//Conditional statements

//1) if else statements
//Example 01

let email = "smart_coder346@gmail.com";
let password = "RP89@@##ijk&$4678";

if(email === "smart_coder346@gmail.com" && password === "RP89@@##ijk&$4678"){
    console.log("Logged In Successfully!")
} else {
    console.log("invalid email or password")
}

//Example 02

let is_BirthCertificate = true;
let identitycard = false;

if(is_BirthCertificate || identitycard){
    console.log("you can sit in examination hall");
}else {
    console.log("Sorry you can not sit in examination hall");
}

//Switch cases

//Example 01
let day = "Monday";

switch (day){
    case "Saturday":
    console.log("Enjoy the weekend :)");
    break;
    case "Sunday":
    console.log("Clean you home and set your 📚 book shelf");
    break;
    case "Monday":
    console.log("Coding Practice ");
    break;
    default: 
    console.log("working days ");
}

//Ternary operators

//Example 01

let age = 32;
let result = age >= 18 ? " You are adult" : " you are Not adult";
console.log(result);

//Example 02

let marks = 20;
let pass = marks >= 33 ? "Passed!" : "Failed!" ;
console.log(pass);


// PRACTICE SET
//QUESTION 01
// get user to input a number by using prompt("enter a number : "). Check if the number is multiple of 5 or not 

let number = prompt("Enter a number : ");
if(number % 5 === 0){
    console.log("it is multiple of 5")
}else{
    console.log("it is NOT multiple of 5")
}

//QUESTION 02
// write a code which can give grades to students according to their percentage

let percentage = prompt("enter your percentage : ");

if(percentage >= 80 && percentage <= 100){
    console.log("congratulation! You got grade A+");

}else if(percentage >= 70 && percentage <= 79){
    console.log("Fantastic ! You got grade A");

}else if(percentage >= 60 && percentage <= 69){
    console.log("Keep it up ! You got grade B");

}else if(percentage >= 50 && percentage <= 59){
    console.log("Need Improvement ! YOu got grade C");

}else{
    console.log("You are failed");
}


const id = Symbol('124')
console.log(id)
const anotherId = Symbol('124')
console.log(anotherId)

