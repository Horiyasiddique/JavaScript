// //Acessing elemnt by id name
// let heading = document.getElementById("heading1");
// console.dir(heading);

// //Accessing element by class name
// let paragraphs = document.getElementsByClassName("parahs");
// console.dir(paragraphs);

// //Acessing element by it's tag name
// let tagsName = document.getElementsByTagName("header");
// console.dir(tagsName)

// //Query selector

// let element = document.querySelector("#heading1");
// console.dir(element);

// let allElement = document.querySelectorAll(".parahs");
// console.log(allElement);

// //DOM MANIPULINATION
// //1) tag name
// let tagname = document.querySelector("h1");
// console.log(tagname.tagName);

// //2) inner text
// let unoderedList = document.querySelector("ul");
// console.log(unoderedList.innerText)

// //3) inner HTML
// console.log(unoderedList.innerHTML);

// //4) Text content
// let hidden = document.querySelector("#hiddenHeading");
// console.log(hidden.textContent)

// // PRACTICE SET
// // QUESTION 01
// // create a heading of h2 with hext "hello javascript". append the text in last from "apna college"

// let question1 = document.querySelector("#hello");
// console.log(question1.innerText);
// let append = (question1.innerText = question1.innerText + "From Apna College");
// console.log(append);

// //QUESTION 02

// let divs = document.querySelectorAll(".box");
// let idx = 0;
// for (div of divs) {
//   div.innerText = `new unique value ${idx}`;
//   idx++;
// }

// //get attribute

// let attr = document.querySelector(".box").getAttribute("class");
// console.log(attr);

// //set attribute
// let newAttr = document.querySelector("p").setAttribute("class","myPara")
// console.log(newAttr)

// //node.style
// let name1 = document.querySelector("#myId")
// name1.style.backgroundColor = "green"
// name1.style.fontSize = "20px"
// name1.innerText = "hello world"

// //insert elements
// let btn = document.createElement("button")
// btn.innerText = "submit"
// let newDiv = document.querySelector("#myId");

// //.append
// // newDiv.append(btn)

// //.prepend
// newDiv.prepend(btn)

// //.before
// // newDiv.before(btn)

// //.after
// // newDiv.after(btn)

//Practice set
//QUESTION 01
//Create a button give it a text "click me" background color of red and color white. insert it inside the body tag as first element

let newButton = document.createElement("button");
newButton.innerText = "Click me!";
newButton.style.color = "white";
newButton.style.backgroundColor = "red";
let box = document.querySelector("body");
box.prepend(newButton);

//QUESTION 02
//Create a <P> tag in html give it a class and some styling .now create a new class in css and try to append this to the <p> element .use classList method

let q2para = document.querySelector("p");
q2para.classList.add("newContent");
