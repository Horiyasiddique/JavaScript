// ************************ Object Oriented Programming [OOP] ********************
const user = function (username, password, isLoggedIn) {
  this.username = username;
  this.password = password;
  this.isLoggedIn = isLoggedIn;
  this.greetings = () => {
    console.log(`Hey Welcome ${this.username}`);
  };
};

const user1 = new user("Hooriya", 1234, true);
const user2 = new user("Wariha", 5678, false);
console.log(user1);
user1.greetings();
console.log(user2);

// instanceOf operator
console.log(user1 instanceof user);
console.log(user2 instanceof user);

/**
 * 4 PILLARS OF OBJECT ORIENTED PROGRAMMING 
 * 1. Abstraction
 * 2.Encapsulation
 * 3.Inheritance
 * 4.Polymorphism
 */