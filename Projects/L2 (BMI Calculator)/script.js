const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const mass = parseInt(document.querySelector("#mass").value);
  const height = parseInt(document.querySelector("#height").value);
  const output = document.querySelector("h4");
  if (mass < 0 || mass == "" || isNaN(mass)) {
    alert("Please enter valid input ");
  } else if (height < 0 || height == "" || isNaN(height)) {
    alert("Please enter valid input");
  } else {
    let BMI = (mass / ((height * height) / 10000)).toFixed(2);
    if (BMI < 18.66) {
      output.innerHTML = `Under weight 😔  ${BMI}`;
    } else if (BMI > 18.66 && BMI < 24.9) {
      output.innerHTML = `Congratulations🎉🎊 Healthy ${BMI}`;
    } else if (BMI > 24.9) {
      output.innerHTML = `Over weight 🏋️ ${BMI}`;
    }
  }
});
