// ****************** Inheritence *******************
class User {
  constructor(name) {
    this.name = name;
  }
  logMe() {
    console.log(`Username is : ${this.name}`);
  }
}

class Teacher extends User {
  constructor(name, email, password) {
    super(name);
    this.email = email;
    this.password = password;
  }
  teacherDetails() {
    console.log(
      `Teacher name is ${this.name}. Her email address is : ${this.email} and her password : ${this.password}`
    );
  }
}

const teacher1 = new Teacher('Sadia Haq', 'sadia@chemistry.com', 'NaCl');
teacher1.logMe();
teacher1.teacherDetails()