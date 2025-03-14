const userInput = document.querySelector("input");
const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("Please enter a snetence or paragraph");
    return;
  }
  let words = (userInput.value).trim().split(/\s+/);
  let numberOfWords = words.length;
  result.innerText = `Total words in your sentence are : ${numberOfWords}`;
});
