//EVENT LISTENERS
//onclick
let button = document.querySelector("#click");
button.onclick = () => {                                 //we can also use ondblclick
  console.log("button was clicked");
};

//onmouseover
let div = document.querySelector("#box");
div.onmouseover = () => {
  console.log("You are inside the box");
};

//Event Objects
let submit = document.querySelector("#submit");
submit.ondblclick = (e)=>{
    console.log(e)
    console.log(e.target)
    console.log(e.type)
    console.log(e.clientX)
    console.log(e.clientY)
}


//Event Listeners
submit.addEventListener("click", ()=>{
    console.log("form have been submitted")
})

//remove vent listener
let reset  = document.querySelector("#reset")
const Reset = ()=>{console.log("form reset!")}
reset.addEventListener("click",Reset)
reset.removeEventListener("click",Reset)

//Practice set

let toggleBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let mode = "light"

toggleBtn.addEventListener("click",()=>{
    if(toggleBtn === "light"){
        mode = "dark";
        body.classList.add("dark")
        body.classList.remove("light")
    }else{
        mode = "light";
        body.classList.add("light")
        body.classList.remove("dark")
    }

    console.log(mode)
})