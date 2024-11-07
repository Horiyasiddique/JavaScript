let userScore = 0; //accessing user score
let computerScore = 0; //accessing computer score
let msgparagraph = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let computerScorePara = document.querySelector("#computer-score");
const choices = document.querySelectorAll(".choice");

// function to acess user choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// function to generate computer choice
const generateCompChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  let randomIdx = Math.floor(Math.random() * 3);
  return choices[randomIdx];
};

//Function for Draw Game
const drawGame = () => {
  msgparagraph.innerText = "Game was Draw! Play Again";
  msgparagraph.style.backgroundColor = "#023047";
};

//Function for show winner
const showWinner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    userScore++;
    userScorePara.innerText = userScore;
    msgparagraph.innerText = `You Win  your ${userChoice} beats ${compChoice}`;
    msgparagraph.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    msgparagraph.innerText = `You lost Computer's ${compChoice} beats  your ${userChoice}`;
    msgparagraph.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //computer choice
  const compChoice = generateCompChoice();

  //check the wining condition
  if (userChoice === compChoice) {
    //draw game
    drawGame();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      userwin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userwin = compChoice === "rock" ? true : false;
    } else if (userChoice === "scissors") {
      userwin = compChoice === "paper" ? true : false;
    }
    showWinner(userwin, userChoice, compChoice);
  }
};
