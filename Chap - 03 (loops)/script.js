// *******************************Loops / Iterations ****************************************

// ++++++++++++++++++++++++++++++++++ for loop ++++++++++++++++++++++++++++++++++
// for (let i = 0; i < array.length; i++) {
// let array = ["apple", "mango", "banana", "orange", "grapes"];
//     const elem = array[i];
//     console.log(elem);

// };

// +++++++++++++++++++++++++++++++++++++ nested for loops +++++++++++++++++++++++++++++++++++++
// for (let i = 0; i <= 10; i++) {
//   console.log(`outer loops value ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// +++++++++++++++++++++++++++++ break and continue keyword in loops ++++++++++++++++++++++++
// for (let i = 1; i <= 20; i++) {
//     if(i == 3){
//         console.log(`3 is detected 💖`)
//         continue;
//     }
//     console.log(`value of i is ${i}`)

// }

// for (let chance = 1; chance <= 3; chance++) {

//     if(chance < 3){
//         console.log(`chance ${chance}`);
//         console.log(`haha no problem continue but be aware 😺`);
//         continue;
//     }else if(chance == 3){
//         console.log(`chance ${chance}`)
//         console.log(`Oops! Game Over it was your last chance 😭`);
//         break;
//     }

// }

// ++++++++++++++++++++++++++ while loops ++++++++++++++++++++++++++++++++
let index = 1;
while (index <= 10) {
  console.log(`2 * ${index} = ${2 * index}`);
  index++;
}

let langs = ["JS", "Pythons", "TS", "Java", "C", "C++"];
let arr = 0;
while (arr < langs.length) {
  console.log(`${langs[arr]}`);
  arr++;
}

// ++++++++++++++++++++++++++ do while loops +++++++++++++++++++++++++
// it will execute first then check condition
let score = 0;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);

// tabe of 4 in do while loops
let number = 4;
let multiple = 1;
do {
  console.log(`${number} * ${multiple} = ${number * multiple}`);
  multiple++;
} while (multiple <= 10);

// +++++++++++++++++++++++++++ for of loops ++++++++++++++++++++++++++++++++++++
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
for (const num of numbers) {
  console.log(`number is ${num}`);
}

let greetings = "Hello World!";
for (const greet of greetings) {
  if (greet == " ") {
    continue;
  }
  console.log(`characters of greetings is : ${greet}`);
}

// for of loop with map
//map is also a data type which return unique values
let map = new Map();
map.set("Pakistan", "PKR");
map.set("India", "INR");
map.set("Japan", "Yen");
//console.log(map)

//destructuring of array [key,val] now we can acess bith value and keys
for (const [key, val] of map) {
  console.log(`${key} : ${val}`);
}
//for of loops do not work on objects
// for objects we use for in loops so lets get started
// +++++++++++++++++++++++++++++ for in loops ++++++++++++++++++++++++++++++

let myIntro = {
  name: "Hooriya Siddiqui",
  services: "frontend developer",
  githubRepos: 29,
  skills: ["HTML", "CSS", "JS", "TS", "GSAP", "LOCOMOTIVE.JS", "LENIS"],
};
//for in loops returns keys so to get values we use this syntax ${myIntro[key]}
for (const key in myIntro) {
  console.log(`${key}  ${myIntro[key]}`);
}

//for in loops on array
for (const key in langs) {
  console.log(key);
  //keys of array is indexes thats why it returns indexes
}

//for in loops on array to get key and values both
for (const key in langs) {
  console.log(`${langs[key]}`);
}

//for in loops on map **maps are not iteratable**
for (const key in map) {
  console.log(`${map[key]}`);
}

// ++++++++++++++++++++++++++++++ for each loops ++++++++++++++++++++++++++++++++++++++=
langs.forEach((element) => {
  //console.log(element)
});

langs.forEach((items, idx, arr) => {
  // console.log(`${items} on index ${idx} and complete list is : ${arr}`)
});

let users = [
  { userName: "princess", email: "cool12@gmail.com", password: "12345" },
  { userName: "beauty_queen", email: "pretty@email.com", password: "6789" },
  { userName: "papa_ki_pari", email: "pari@email.com", password: "6789" },
];

users.forEach((elem)=>{
  console.log(`user name is ${elem['userName']} email is : ${elem['email']}`)
})