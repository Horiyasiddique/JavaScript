/**
 * type, timestamp, defaultPrevented, toElement, srcElement
 * currentTarget, clientX, clientY, screenX, screenY, altKey, ctrlkey, shiftkey
 */
//! JS is synchronous language so events in JS also behave synchronously

/**
 * ??????????????  what is event propagation ???????????????
 * 2 types of event propagation : bubbling , capturing
 * bubbling :- bottom to top
 * capturing :- top to bottom
 *
 */

//+++++++++++++++++++++ example of bubbling ++++++++++++++++++++++
// const container = document.querySelector("ul");

// container.addEventListener(
//   "click",
//   () => {
//     console.log("container has soo many beautiful images 🤩🤩");
//   },
//   false
// );

// const cakeImg = document.querySelector("#cake");

// cakeImg.addEventListener(
//   "click",
//   () => {
//     console.log("cake is delecious 🤤🤤");
//   },
//   false
// );

// conclusion : when I click on images other than cake image container has soo many beautiful images 🤩🤩 print in console pannel but when I click on cake image cake is delecious 🤤🤤print first and after that container has soo many beautiful images 🤩🤩 printed in console [bottom to top]

// ++++++++++++++++++++++++ example of capturing ++++++++++++++++++++++++
// const container = document.querySelector("ul");

// container.addEventListener(
//   "click",
//   () => {
//     console.log("container has soo many beautiful images 🤩🤩");
//   },
//   true
// );

// const cakeImg = document.querySelector("#cake");

// cakeImg.addEventListener(
//   "click",
//   () => {
//     console.log("cake is delecious 🤤🤤");
//   },
//   true
// );

// conclusion : when I click on images other than cake image container has soo many beautiful images 🤩🤩 print in console pannel but when I click on cake image container has soo many beautiful images 🤩🤩 print first and after that cake is delecious 🤤🤤 printed in console [top to bottom]

// +++++++++++++++++++ stop propagation just like preventDefault ++++++++++++++++++++++
/** it will stop propagation  */

// const container = document.querySelector("ul");

// container.addEventListener(
//   "click",
//   (e) => {
//     console.log("container has soo many beautiful images 🤩🤩");
//   },
//   false
// );

// const cakeImg = document.querySelector("#cake");

// cakeImg.addEventListener(
//   "click",
//   (e) => {
//     console.log("cake is delecious 🤤🤤");
//     e.stopPropagation(); //now it is not bubbling from bottom to top it is just priniting cake is delecious in console
//   },
//   false
// );


// ++++++++++++++++++ task 01 ++++++++++++++++++++++
//when we click on image and image should be diappear
// const images = document.querySelector('ul')
// images.addEventListener('click', (e)=>{
//     let removeElem = e.target.parentNode
//     console.log(removeElem)
//     removeElem.remove()

// },false) //there is a bug when we click on ul whole bode is removing bcz body i parent of ul tag let debug it

const images = document.querySelector('ul')
images.addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){
        let removeElem = e.target.parentNode
        console.log(removeElem)
        removeElem.remove() 
    }
    console.log(e.target.tagName)
},false)