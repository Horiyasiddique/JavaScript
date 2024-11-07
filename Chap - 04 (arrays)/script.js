// //Arrays 
let fruits = ["Apple" , "Mango" , "Banana" , "Kiwi" , "Orange" , "Grapes" ];


// //loops with arrays 
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}


let cities = ["karachi" , "lahore" , "islamabad" , "multan" , "sukkur"];
for(let favFruits of fruits){
    console.log(favFruits.toUpperCase());
}

//Practice set
//QUESTION 01
//for a given array with marks of  [56,89,90,98,78,65]. Find the average marks of the class

let marks = [56,89,90,98,78,65];
let sum = 0;
for(let val of marks){
    sum += val
}

let averageMarks = sum / marks.length;
console.log(` Average marks of the class are ${Math.round(averageMarks)}`);

//QUESTION 02
//for a given array with a price of 5 items [250,645,300,900,50]. All items should have an offer of 10% OFF on them.Change the array to store final price after applying offer.

let price = [250,645,300,900,50];
let i = 0;
for(let val of price){
    let offer = val / 10;
   price[i] =  price[i] - offer;
   console.log(`Price after offer is ${Math.round(price[i])}`)
}


//Array Methods
let vegetable = ["Potato" , "tomato" , "cucumber" , "onion" , "cabbage"];
vegetable.pop();
console.log(vegetable);
vegetable.push("carrot");
console.log(vegetable);
vegetable.shift();
console.log(vegetable);
vegetable.unshift("Mint leaves");
console.log(vegetable);
vegetable.slice(2,4);
console.log(vegetable);
vegetable.splice(0,1,"chilli");
console.log(vegetable);
let vegAndFruits = vegetable.concat(fruits)
console.log(vegAndFruits);

//Practice Set 
//QUESTION 01
//Create an array of companies ["Bloomberg" ,"Microsoft"  , "Uber" , "Google" , "IBM" , "Netflix"].
//remove first element  "Boomberg" of an array.
//Add amazon in last of an array.
//Replace "uber" with "Ola".

let companies = ["Bloomberg" ,"Microsoft"  , "Uber" , "Google" , "IBM" , "Netflix"];
companies.shift();
console.log(companies);
companies.push("Amazon");
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
