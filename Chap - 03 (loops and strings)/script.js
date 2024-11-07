//loops

//for loops
for(let i = 1; i <= 5 ; i++){
    console.log(` ${i}Horiya Siddique You will acheive your dreams just work hard and ignore all the distructions . trust me `)
}

//add in loops from 1 to n
let add = 0;
let n = 500;
for(let i = 0; i <= n; i++){
    add = add + i // 1+ 2 +3 +4 ................+ 500 = 125250
}

console.log("add =" , add);

//while loops
let i = 0;
while(i <= 5 ){
    console.log("i = " , i);
    i++
}

//do while loops
let j = 0
do{
    console.log("Hello world");
    j++
}while(j <= 5);

// for of loops
let name = "Hooriya Siddique";
let size = 0;
for(let val of name){
    console.log("val = " , val);
    size++
}

console.log("size = " , size);

//for in loops




//Practice set 
//QUESTION 01
//print all even numbers from 0 to 100

for(let i = 0 ; i <= 100 ; i++){
   if(i % 2 === 0 ){
    console.log("Even Number is " , i)
   }
}

//QUESTION 02
//print all ODD numbers from 0 to 100

for(let i = 0 ; i <= 100 ; i++){
    if(i % 2 !== 0 ){
     console.log("0dd Number is " , i)
    }
 }

//  QUESTION 03
//  Create a game where you start with any random number ask the user to keep guessing the number until the user enters the correct value 
 
 let randomNumber = Math.floor(Math.random() * 9)
let userInput = prompt("Guess the number from 0 to 9");
while(userInput != randomNumber){
    userInput = prompt(" You guess the wrong number . plese Guess the number again from 0 to 9")
}

console.log("Congrats You guessed the correct number !");

// strings Methods
let str = " JavaScript   ";
let str2 = "Hello World"
let firstName = "Hooriya";
let lastName = " Siddqiue "

console.log(str[0]);                           //accessing indivisual character of string
console.log(str.length);                      //accessing length of string
console.log(str.toLowerCase());              //transform string into uppercase
console.log(str.toUpperCase());             //transform string into lowercase\
console.log(str.trim());                   //remove white space 
console.log(str2.slice(6,9))              //returns specific part of string
console.log(firstName.concat(lastName)); //concate (join) two strings
console.log(str2.charAt(3))             //get value of index 3


//Templete Literals 
let Student = {
    name: "Hooriya Siddique",
    class: "IX",
    perecentage: 97.5,
    rank: "1st"
}


console.log(`I'm proud to say that Shinning star of our school ${Student.name} from ${Student.class} scored ${Student.perecentage} percentage and got ${Student.rank} rank in class`);

//Practice set
//QUESTION 01
//prompt the user to enter their full name . generate a username for them based on their input. start the name with "@" followed by the full name and end it with the full name length e.g "@AyeshaSiddique14"
let userName = prompt("Enter your full Name : ");
console.log(`@${userName.trim().concat(userName.length)}`)
