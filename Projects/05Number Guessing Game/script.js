let input = document.querySelector("input");
let button = document.querySelector("button");
let para = document.querySelector("p");

function resetResult(){
    para.classList.add("hidden")
    
}
function winOrLose() {
  let randomNumber = Math.floor(Math.random() * 9);
  let userGuess = parseInt(input.value);
  resetResult()
  if (randomNumber === userGuess && userGuess !== "") {
    para.classList.remove("hidden");
    para.innerText = "Congratulations! You win 🎉 ";
    para.style.color = "green";
    para.style.fontSize = "large";
    para.style.textAlign = "center";
  } else if (randomNumber !== userGuess) {
    para.classList.remove("hidden");
    para.innerText = `Wrong! It was ${randomNumber} 😥`;
    para.style.color = "red";
    para.style.fontSize = "large";
    para.style.textAlign = "center";
  }
}
input.addEventListener("input", resetResult);
button.addEventListener("click", winOrLose);
