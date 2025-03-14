//RANDOM COLOR GENERATOR
//generate a random color
function randomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

const body = document.querySelector("body");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

startButton.addEventListener("click", () => {
  const startGeneratingColor = setInterval(() => {
    // console.log(randomColor());
    body.style.backgroundColor = randomColor();
  }, 1800);
  stopButton.addEventListener("click", () => {
    clearInterval(startGeneratingColor);
    console.log("STOPPED!");
  });
});
