//variables and constants
let inputDir = { x: 0, y: 0 };
const foodSound = new Audio("assets/food.mp3");
const moveSound = new Audio("assets/move.mp3");
const gameOver = new Audio("assets/gameover.mp3");
const bgMusic = new Audio("assets/music.mp3");
let speed = 8;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
let food = { x: 6, y: 7 };
let ScoreBoard = document.querySelector("#score");
let highScore = document.querySelector("#HighScore");
let score = 0;

//functions and methods
//FUNCTION FOR DETECT SPEED AND START GAME
function main(cTime) {
  window.requestAnimationFrame(main);
  //console.log(cTime);
  if ((cTime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = cTime;
  gameEngine();
}

//FUNCTION FOR DETECT SNACK COLLISION WITH HIS OWNSELF AND WALL
function isCollide(snake) {
  //IF SNAKE COLLIDE WITH OWN SELF
  for (let i = 1; i < snakeArr.length; i++) {
    if (snake[i].x === snakeArr[0].x && snake[i].y === snakeArr[0].y) {
      return true;
    }
  }

  //IF SNAKE COLLIDE WITH WALL
  if (
    snake[0].x >= 18 ||
    snake[0].x <= 0 ||
    snake[0].y >= 18 ||
    snake[0].y <= 0
  ) {
    return true;
  }
}

//FUNCTION TO CONTROL COMPLETE GAME LOGIC
function gameEngine() {
  //part 1 updating snake Array and food

  if (isCollide(snakeArr)) {
    //check if snake collide then

    gameOver.play(); //play game over music
    bgMusic.pause(); //pause background music
    inputDir = { x: 0, y: 0 };
    alert("game over pres any key to restart"); //restart game
    snakeArr = [{ x: 13, y: 15 }];
    bgMusic.play(); //after restart game replay background music
    score = 0;
  }

  //if snake has eaten food , increment score and regenrate the food
  if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
    foodSound.play(); //play bite sound effect
    score += 1; // increment in score

    //checking highscore is greater or smaller than score
    if (score > hiScoreValue) {
      hiScoreValue = score;
      localStorage.setItem("hiScore", JSON.stringify(hiScoreValue));
    }
    ScoreBoard.innerHTML = `Score : ${score}`;

    //after eating food increasing snake's body
    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });

    //keeping food on random place
    let a = 2;
    let b = 16;
    food = {
      x: Math.floor(a + (b - a) * Math.random()),
      y: Math.floor(a + (b - a) * Math.random()),
    };
  }

  //MOVING THE SNAKE
  for (let i = snakeArr.length - 2; i >= 0; i--) {
    const element = snakeArr[i];
    snakeArr[i + 1] = { ...snakeArr[i] };
  }

  snakeArr[0].x += inputDir.x;
  snakeArr[0].y += inputDir.y;

  //part 2 display the snake and food
  //display the snake
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }
    board.appendChild(snakeElement);

    //display the food
    foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    board.appendChild(foodElement);
  });
}

//main logic starts here
//high score functionality
let hiScore = localStorage.getItem("hiScore");
let hiScoreValue;

if (hiScore === null || isNaN(parseInt(hiScore))) {
  hiScoreValue = 0;
  localStorage.setItem("hiScore", JSON.stringify(hiScoreValue));
} else {
  hiScoreValue = JSON.parse(hiScore);
}

highScore.innerHTML = `High Score: ${hiScore}`;

//adding event listeners for changing directions of snake on key down
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  inputDir = { x: 0, y: 1 }; //game start
  moveSound.play(); //play background music
  switch (e.key) {
    case "ArrowUp":
      console.log("Arrow Up");
      inputDir.x = 0;
      inputDir.y = -1;
      break;

    case "ArrowDown":
      console.log("Arrow Down");
      inputDir.x = 0;
      inputDir.y = 1;
      break;

    case "ArrowLeft":
      console.log("Arrow Left");
      inputDir.x = -1;
      inputDir.y = 0;
      break;

    case "ArrowRight":
      console.log("Arrow Right");
      inputDir.x = 1;
      inputDir.y = 0;
      break;

    default:
      break;
  }
});
