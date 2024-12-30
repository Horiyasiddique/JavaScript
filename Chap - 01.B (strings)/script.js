// ****************************STRING IN JavaScript********************************
let string = new String("horiYa-siDDique-FronTend-DeveLOPER");

//1. length (to check length of any string)
console.log(string.length); //output 34

//2. toUppercase (used to convert string in capital letters)
console.log(string.toUpperCase()); //output : HORIYA-SIDDIQUE-FRONTEND-DEVELOPER

//2. toLowercase (used to convert string in small letters)
console.log(string.toLowerCase()); //output : horiya-siddique-frontend-developer

//3.charAt (used to check character of particular index(position))
console.log(string.charAt(2)); //output : r
const index = 7;
console.log(`the character at index ${index} is ${string.charAt(index)}`);

//4. indexOf (used to check position of particular index (position))
console.log(string.indexOf("r")); //output : 2

//5. include (used to check any word or letter is include in string or not. it returns boolean value)
console.log(string.includes("i")); //output : true
console.log(string.includes("z")); //output : false
console.log(string.includes("FronTend")); //output : true

//6. trim (use to trim string o the basis of condition we give)
console.log(string.trim("  "));

//7. replace (used to replace one with anotherone based on your given condition. it will replace only first -)
console.log(string.replace("-", " ")); //output : horiYa siDDique-FronTend-DeveLOPER

//8. replaceAll (used to replace one with anotherone based on your given condition. it will replace all -)
console.log(string.replaceAll("-", " ")); //output : horiYa siDDique FronTend DeveLOPER

//9. split (use to split string )
console.log(string.split("-")); //output : [ 'horiYa', 'siDDique', 'FronTend', 'DeveLOPER' ]


//10. slice (returns a shallow copy of string end is not included. it can take negative values)
console.log(string.slice(2,8)) //output : riYa-s
console.log(string.slice(2,-8)) //output : riYa-siDDique-FronTend-D

//11. substring (its like slice but it can not take negative values)
console.log(string.substring(2,8)); //output : riYa-s