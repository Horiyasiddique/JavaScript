// //JS is synchronous language by default
// //but we an make it asynchronous

// /** 1. setTimeot
//  * 2. setTimeInterval
//  */

// // setTimeout :-
// //it add delay in code execution and make make code execution asynchronous. it is a method and required 2 parameters 1. call back function and 2. delay in ms
console.log("first");
console.log("second");
setTimeout(() => {
  console.log("third");
}, 2000); //third will print after 2 seconds
console.log("fourth");

// // ?????? what if I pass 0 in setTimeout delay ??????
// /**still it will print after execution of remaining code */
console.log("first");
console.log("second");
setTimeout(() => {
  console.log("third");
},0); //third will print in end
console.log("fourth");

// setInterval:
// Repeatedly calls a function or executes a code chunk, with a fixed time delay between each call.

setInterval(()=>{
  console.log('I am Hooriya Siddiqui')
},2000)

// //TASK 1
// /**WRITE A SETIMEOUT FUNCTION AND CHANGE THE TEXT OF YOUR WEB PAGE AFTER 3 SECONDS BUT IF USER CLICK ON STOP BUTTON TEXT SHOULD NOT BE CHANGED */

let text = document.querySelector("h1");
let button = document.querySelector("button");
let changeText = setTimeout(() => {
  text.innerHTML = `Say Hello To JavaScript`;
}, 3000);
button.addEventListener("click", () => {
  clearTimeout(changeText);
  console.log('Text will not be chnaged')
});



