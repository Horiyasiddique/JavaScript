// ********************** Access by ID Name ***************************
let name = document.getElementById("name");
name.innerHTML = "<h1> قیدی نمبر 804 </h1>"; //changing inner text of #name [h1]

// checking class of this partcular id element
document.getElementById("name").className; //output : // 'title'

//getting value of attribute class
document.getElementById("name").getAttribute("class"); //output: // 'title'

//setting new value in class attribute
document.getElementById("name").setAttribute("class", "test");

// ++++++++++ differnece b/w innerHTML, textContent and innerText ++++++++++++++++++
// .innerHTML support Html tags while textContent and innerText do not
// .innerText shows only visible text on page
//textContent shows all the content either it visible or hidden [sometimes tect is hidden on page due to CSS styling]

// ********************** Access by class name **********************
document.getElementsByClassName("title");

// ********************** Access by query selector ****************
let skill = document.querySelector("li");
skill.style.backgroundColor = "yellow";
skill.style.color = "black";
skill.style.fontSize = "32px";

// ********************* quey selector All ***********************
let allSkills = document.querySelectorAll("li");
console.log(allSkills); //node list
// allSkills.style.backgroundColor = 'blue'; !!!!!!!! error can not set properties of undefined
allSkills.forEach((item) => {
  item.style.backgroundColor = "red";
});

// !!node lists are not pure array but very similar to an array

// ************************ Access by class NAme ***************
let links = document.getElementsByClassName("links");
console.log(links); //HTML collection it does not has properties and methods of an  array

// ???????????? how to convert html collection into an array ??????????????
let convertedArr = Array.from(links);
console.log(convertedArr); //now it has properties and methods f an array bcz it has converted
convertedArr.forEach((items) => {
  items.style.backgroundColor = "blue";
  items.style.color = "white";
});

// ****************node list ***************
let parent = document.querySelector(".parent");
console.log(parent.children[2].innerHTML);
let convertedParentArr = Array.from(parent.children);
convertedParentArr.forEach((item) => {
  item.innerHTML = item.innerHTML.toUpperCase();
});

let dayOne = document.querySelector(".days");
console.log(dayOne.parentElement); //to access parent element
console.log(dayOne.nextElementSibling); //to access next tag [tuesday]

// ***************** create element ****************
// ******************* task **************
function createDiv(color, text) {
  let div = document.createElement("div");
  div.style.padding = "14px";
  let addText = document.createTextNode(text);
  div.appendChild(addText);
  div.style.backgroundColor = color;
  document.querySelector("body").appendChild(div);
}

createDiv(
  "brown",
  "I am Passionate student of Sir Hitesh Chaudhary but I do not know why I do not like chai ☕"
);
createDiv(
  "green",
  "kia hua bhaiiee pdhaii no hori na tum se focus k sath mobile switched off krdo solid solution hy 📵 "
);

// ************ edit or remove elements ***********************

function addLanguages(languageName) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(languageName))
  document.querySelector('.language').appendChild(li)
}

addLanguages('Python');
addLanguages('Ruby');
addLanguages('Java');
addLanguages('C++');

// edit functionality 
let secondLang = document.querySelector('li:nth-child(2)')
//console.log(secondLang)
let newLi = document.createElement('li');
newLi.textContent = 'TypeScript';
secondLang.replaceWith(newLi);

//remove functionality
let lastLanguage = document.querySelector('li:last-child');
lastLanguage.remove()