// ********************* Call *******************
//EXAMPLE 01
function setUser(username) {
  this.username = username;
  console.log("called!");
}

function createUser(username, email, password) {
  setUser.call(this, username);
  this.email = email;
  this.password = password;
  console.log(
    `Hello ${username} check your email ${email} we have sent you your ${password} to save`
  );
  return {
    username: this.username,
    email: this.email,
    password: this.password,
  };
}

const user1 = createUser("smart_coder", "coder@js.com", "404502");
const user2 = createUser("senior_programmer", "programmer@react.com", "1234");
console.log(user1);
console.log(user2);

//EXAMPLE 02
/** Imagine we have a function that sets the car's make and model, and another function that creates the car object with additional properties such as color and year. */
function setCar(make, model) {
  this.make = make;
  this.model = model;
  console.log("Car Properties set!");
}

function createCar(make, model, color, year) {
  setCar.call(this, make, model);
  this.color = color;
  this.year = year;
  return {
    make: this.make,
    model: this.model,
    color: this.color,
    year: this.year,
  };
}

const car1 = createCar("Toyota", "Corolla", "blue", 2020);
const car2 = createCar("Honda", "Civic", "red", 2021);
console.log(car1);
console.log(car2);
