let box = document.querySelector("#box");
let toggleBtn = document.querySelector("button");
let texts = Array.from(document.querySelectorAll(".texts"));

let lightTheme = true;
toggleBtn.addEventListener("click", () => {
  if (lightTheme) {
    box.classList.remove("light");
    box.classList.add("dark");
    toggleBtn.innerText = "Dark Theme 🌙";
    texts.forEach((text) => {
      text.style.color = "white";
    });
    lightTheme = false;
  } else {
    box.classList.remove("dark");
    box.classList.add("light");
    toggleBtn.innerText = "Light Theme 🌞";
    texts.forEach((text) => {
      text.style.color = "black";
    });
    lightTheme = true;
  }
});
