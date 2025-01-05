//****************************** OBJECTS ****************************************
// method 1 'type literals'
let user = {
  //key |  value
  name: "Hooriya",
  age: 14,
  email: "horiya@yahoo.com",
  password: "hoor2020",
};

//how to access values of object
console.log(user.name); //dod notation [not a very good practice]
console.log(user["password"]); //square bracket notation [very good practice]

// how to freeze object [by freezing object you can't change its properties]
Object.freeze(user);
user.age = 15;
console.log(user);

//+++++++++++++++++++++++ INTERVIEW QUESTION +++++++++++++++++++++++
//Q) create a symbol use in object keys and print it
let patient_controller = Symbol("key1");
let hospital = {
  patient_Name: "Shareef Khandan",
  [patient_controller]: "establishment",
  disease: "haram khori, beghairtee",
  doctor_name: "Imran Khan",
  treatment: "phansii",
};
console.log(hospital);
console.log(hospital[patient_controller]);

//Q) what i the difference b/w const obj = {} & const obj = new Object()
// first one is a non singleton onject and second one is  a singleton object

//method 2 singli ton 
//how to merge 2 objects
const restraunt = new Object()
restraunt.name = 'Ibne Batoota'
restraunt.location = 'karachi'
 console.log(restraunt)

const restraunt2 = new Object()
restraunt2.menu = 'Desi'
restraunt2.ratings = '5'
console.log(restraunt2)

let restraunts = Object.assign({}, restraunt , restraunt2)
console.log(restraunts)


//DESTRUCTURING OF OBJECTS 
let course = {
  courseName : 'Ultimate Python',
  courseFee : 'free',
  courseInstructor : 'YouTube'
}

let {courseInstructor : instructor} = course
console.log(instructor)