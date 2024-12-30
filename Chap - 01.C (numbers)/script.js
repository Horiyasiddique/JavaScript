//***********************************NUMBER*************************************

const integar = new Number(345.6578689);
console.log(integar);

//1. toExponential (used to convert into scientific notation)
console.log(integar.toExponential(3));

//2. toString (used to convert data tpe of number to string)
console.log(integar.toString()); //output : 345

//3. toFixed (used to add zeroes after decimal)
console.log(integar.toFixed(2));

//4. toPrecise (used to precise value. it returns string)
console.log(integar.toPrecision(3));

//5. localeString
const balance = new Number(123456789034789);
console.log(balance.toLocaleString("en-IN")); //indian format output : 12,34,56,78,90,34,789

//*********************************************MATHS IN JAVASCRIPT*************************************
console.log(Math.abs(4)); //used to get absolute value
console.log(Math.round(4.678)); //used to roundoff the value
console.log(Math.ceil(4.178)); //used to roundoff the value but with high number
console.log(Math.floor(4.9876)); //used to roundoff the value but with lowest number
console.log(Math.random() * 10);

//************************************* DATE AND TIME IN JAVASCRIPT*******************************
//dates :
let myDate = new Date();
console.log(myDate.toString()); //output : Sun Dec 29 2024 22:05:27 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toISOString()); //output : 2024-12-29T17:07:05.580Z
console.log(myDate.toDateString()); //output : Sun Dec 29 2024
console.log(myDate.toLocaleString()); //output : 12/29/2024, 10:08:21 PM
console.log(myDate.toTimeString()); //output : 22:08:21 GMT+0500 (Pakistan Standard Time)

//created date
let createdDate = new Date(2024, 11, 26);
console.log(createdDate.toLocaleString());

//time