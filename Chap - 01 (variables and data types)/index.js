console.log("horiya siddique");

let myName = "Hooriya Siddique";
const pi = 3.141;
var y = true;

let student = {
  name: "horiya",
  age: 14,
  percentage: "97.5%",
  class: 8,
};

console.table([myName, pi, y]);
console.log(`my name is ${myName}`);

//PRACTICE SET
//QUESSTION 01

const Product = {
  name: "Parcer Jotter Standard",
  rating: 4.0,
  price: 240,
  offer: "50% off",
};

console.log(Product.offer);
console.log(Product);

//QUESSTION 02

const Profile = {
  userName: "Hooriya Siddique",
  followers: "1K",
  connections: 978,
  No_Of_Posts: 45,
};

console.log(Profile.followers); //dod Notation
console.log(Profile["userName"]); // square bracket Notation

// let foo = 10000.3456**-5;
// let exp = foo.toExponential();
// console.log(exp)

//<<---------DATA TYPES CONVERSION-------------->>
let age = "14";
console.log(typeof(age)); //string
//converting age from string into number
let ageInNumber = Number(age);
console.log(typeof(ageInNumber));
console.log(ageInNumber)// 14

let id = "horiya123";
console.log(typeof(id)) //string
//converting id from string to number
let idInNumber = Number(id);
console.log(typeof(idInNumber)); //number
console.log(idInNumber); //NaN

//NUMBER TO BOOLEAN
let isAlive = 1;
console.log(typeof isAlive); //number
//conversion of isAlive from number to Boolean
let isAliveInNumber = Boolean(isAlive);
console.log(isAliveInNumber);
console.log(typeof isAliveInNumber); //true

// [AS 1 MEANS TRUE IN JAVASCRIPT SIMILARLY, 0  and "" empty strings means false and if i write anything in "" it will means true]


