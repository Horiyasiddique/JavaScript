// ****************** Objects and new Keyword importance **************************

function createUser(name, score) {
  this.name = name;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.print = function () {
  console.log(`score is ${this.score}`);
};

let Hooriya = new createUser("Hooriya", 45);
let Haniya = new createUser("Haniya", 23);
Hooriya.print();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


// ************* now finally explore What is prototype ******************
//EXAMPLE 01
let teachers = ['Hitesh Chaudhary', 'Harry Bhai', 'Shradha Didi', 'Saifullah Khan'];
let str = 'Hooriya';
let obj = {
  name:' Hooriya',
  age: 14,
  hi: function hello(){
    console.log('hooriya says hello👋🏻')
  }
}
Object.prototype.hooriya = function(){
  console.log('Hooriya is present everywhere')
}

obj.hooriya()
str.hooriya()
teachers.hooriya()
