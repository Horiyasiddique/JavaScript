let questionText = document.querySelector("h1");
let optionInputs = document.querySelectorAll("input");
let submitButton = document.querySelector("button");

const questions = [
  {
    question: "Number of subshell in M-shell is : ",
    a: "one",
    b: "two",
    c: "three",
    d: "four",
    correctAns: "c",
  },
  {
    question: "Boron is a : ",
    a: "metal",
    b: "non-metal",
    c: "metalloid",
    d: "transition metal",
    correctAns: "c",
  },
  {
    question: "Alkaline Earth Metals belongs to which group ? ",
    a: "Group I-A",
    b: "Group II-A",
    c: "Group VII-A",
    d: "Group III-B",
    correctAns: "b",
  },
  {
    question: "This gas turns lime water milky : ",
    a: "Nitrogen",
    b: "Carbondioxide",
    c: "Oxygen",
    d: "NitrousOxide",
    correctAns: "b",
  },
  {
    question: "Atomic radius is measured in : ",
    a: "yard",
    b: "feet",
    c: "inch",
    d: "angstrom",
    correctAns: "d",
  },
  {
    question: "Sheilding effect from left to right in period :",
    a: "decrease",
    b: "moderate",
    c: "remains same",
    d: "increase",
    correctAns: "a",
  },
  {
    question: "The symbol of 'silver' is : ",
    a: "Au",
    b: "Sn",
    c: "Ag",
    d: "Cl",
    correctAns: "c",
  },
  {
    question:
      "An isotope has 6 number of proton , 6 number of electron and 8 numbers of neutrons. Calculate it's atomic mass ?  ",
    a: "12",
    b: "14",
    c: "2",
    d: "16",
    correctAns: "b",
  },
  {
    question: "It is a type of dipole-dipole interaction :",
    a: "Covalent bonding",
    b: "Metallic Bonding",
    c: "Hydrogen Bonding",
    d: "Ionic Bonding",
    correctAns: "c",
  },
];

let currentQuestion = 0;
let score = 0;

// Load question
function loadQuestion() {
  const data = questions[currentQuestion];
  questionText.innerText = data.question;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;

  // Clear selected option
  optionInputs.forEach((input) => (input.checked = false));
}

// Check answer
function checkAnswer() {
  let selectedOption;
  optionInputs.forEach((input) => {
    if (input.checked) {
      selectedOption = input.value;
    }
  });

  if (selectedOption === questions[currentQuestion].correctAns) {
    score++;
  }
}

// Handle submit
submitButton.addEventListener("click", () => {
  checkAnswer();
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    // Display final score
    document.querySelector("#main").innerHTML = `
      <div class="box">
        <h1>Quiz Completed!</h1>
        <p>Your score is ${score} / ${questions.length}</p>
        <button onclick="location.reload()">Restart</button>
      </div>
    `;
  }
});

// Initial load
loadQuestion();
