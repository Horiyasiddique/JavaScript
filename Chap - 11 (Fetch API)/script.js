const URL = "https://cat-fact.herokuapp.com/facts";
const button = document.querySelector("#btn");
const para = document.querySelector("#para");

let getFacts = async () => {
  console.log("getting data...");
  let response = await fetch(URL);
  console.log(response.status);
  let data = await response.json();
 para.innerText = data[3].text
};

button.addEventListener("click",getFacts)