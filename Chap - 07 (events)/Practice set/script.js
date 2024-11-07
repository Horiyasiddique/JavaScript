//Practice set
//QUESTION 01
//create a toggle button  that changes the screen to dark mode when clicked and light mode when clicked again

let toggleBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let mode = "light"

toggleBtn.addEventListener("click",()=>{
    if(mode === "light"){
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