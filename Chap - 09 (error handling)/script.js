//error handling
//by using try catch we can handle our error it helps us to run correct code by ignoring errors although it  shows error but don't stop other code execution

let a = 5;
let b = 4;
console.log(`addition of a and b is = ${a + b}`);
try {
  console.log(`addition a and b is = ${a + c}`);
} catch (err) {
  console.log(err);
  console.log(`addition of a and b is = ${a + b}`);
  console.log(`substraction of a and b is = ${a - b}`);
  console.log(`multiplication of a and b is = ${a * b}`);
  console.log(`division of a and b is = ${a / b}`);
}
