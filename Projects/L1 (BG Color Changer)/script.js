//selecting elemnts
const buttons = document.querySelectorAll("button");
const background = document.querySelector(".main");

buttons.forEach((item) => {
  //change bg-color of buttons dynamically
  item.style.backgroundColor = item.innerText;
  //change backgroung color according to clicked button
  item.addEventListener("click", () => {
    background.style.backgroundColor = item.innerText;
  });
});
