//Object Oriented Programming
//Objects
const Employee = {
  calcTax() {
    console.log("Calculate tax percentage is 10");
  },
};

console.log(Employee.calcTax());

//Prototypes
const Employee1 = {
  name: "Ali",
  role: "Frontend Developer",
};

Employee1.__proto__ = Employee;
console.log(Employee1);

//Classes
class Student {
  studentNameAndRank(name, rank) {
    console.log(`${(this.name = name)}  rank is ${(this.rank = rank)}`);
  }
}

let student0 = new Student().studentNameAndRank("Aliyan", "First");

//Constructor
class Cars {
  constructor(brand, color, model) {
    console.log(
      ` car brand is : ${(this.brand = brand)} and color is : ${(this.color =
        color)} and model is : ${(this.model = model)}`
    );
  }
}

let car1 = new Cars("BMW", "Black", "3 Series Gran Limousine");
console.log(car1);

//Inheritance
class Person {
  eat() {
    console.log("Eat");
  }
  sleep() {
    console.log("Sleep");
  }
  work() {
    console.log("Everyone do their work for maintain life"); // if parent class and child class have same methods , child methods will be used this is clled "method overriding"
  }
}

class SoftwareEngineer extends Person {
  work() {
    console.log(
      "Solve Errors in code and build something to make the life esier 💻"
    );
  }
}

class Doctor extends Person {
  work() {
    console.log("Treat patients with kindness and love 💖");
  }
}

let programmer1 = new SoftwareEngineer();
let doctor = new Doctor();

// //super key word
class Animals {
  constructor(name, food) {
    console.log(`${(this.name = name)} eat ${(this.food = food)}`);
  }

  makeSound() {
    console.log("it makes sound");
  }
}

class Dog extends Animals {
  constructor(name, food) {
    super(name, food).makeSound();
    console.log(`${(this.name = name)} eat ${(this.food = food)}`);
  }
}

let dog = new Dog("Fiona", "Bones");

//Practice Set
//QUESTION 01
//You are creating a website of your college create a class user for with 2 properties name and email. it also has a method called viewData() that allows user to view website data.

//QUESTION 02
//create a new user callled admin which inherits the User class and make amethod called editData which can edit data of the website

class User {
  constructor(name, email) {
    console.log(
      `User name is :  ${(this.name = name)}  and email is : ${(this.email =
        email)}`
    );
  }
  viewData() {
    console.log("Medical science");
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData(newData) {
    console.log(`new Data is ${(this.newData = newData)}`);
  }
}

class Students extends User {
  constructor(name, email) {
    super(name, email);
  }
  percentage(percentage) {
    console.log(`your percentage is ${(this.percentage = percentage)}`);
  }
}

class Teachers extends User {
  constructor(name, email) {
    super(name, email);
  }
  salary(salary) {
    console.log(`salary is ${(this.salary = salary)}`);
  }
  checking() {
    console.log("Copies checked!");
  }
}

let teacher1 = new Teachers("Miss Sadia", "sadia_haq123@gmail.com");

let teacher2 = new Teachers("miss Sana Nauman", "sana456@gmail.com").salary(50000);

let student1 = new Students("Hooriya","hooriya_siddique456@gmail.com").percentage(90);

let student2 = new Students("Fariya", "fariya_khan456@gmail.com");

let admin1 = new Admin("sir Ameen Ansari","ameen456@gmail.com").editData("computer science")


