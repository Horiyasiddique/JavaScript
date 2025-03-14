// ********************* Classes ************************
// class User {
//   constructor(name, email, pincode) {
    // this.name = name;
    // this.email = email;
    // this.pincode = pincode;
//   }

//   encryptPinCode() {
//     return `${this.pincode}**abc`;
//   }

//   setUserName() {
//     return `${this.name.toUpperCase()}`;
//   }
// }

// const user1 = new User("Hooriya", "coder@error.com", 404502);
// console.log(user1.encryptPinCode());
// console.log(user1.setUserName());
// console.log(user1);


// BTS [Behind The Scene]
function  user(name, email, pincode){
    this.name = name;
    this.email = email;
    this.pincode = pincode;

}

user.prototype.encryptedPincode = function(){
    return `${this.pincode}###3h5`
}

user.prototype.capitalCase = function(){
    return `${this.name.toUpperCase()}`
}

const user1 = new user('haniya', 'doctor@apple.com', 12345)
console.log(user1)
console.log(user1.encryptedPincode())
console.log(user1.capitalCase())


