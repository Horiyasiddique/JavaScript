// Triggering event to check keypress and decoit jump
document.onkeydown = function (e) {
  if (e.keyCode == 38) {
    decoit = document.querySelector("#decoit");
    decoit.classList.add("animateDecoit");
    setTimeout(() => {
      decoit.classList.remove("animateDecoit");
    }, 700);
  }
};

// Detecting collision for game over
setInterval(() => {
  let decoit = document.querySelector("#decoit");
  let gameOver = document.querySelector("#gameOver");
  let police = document.querySelector("#policeman");

  // Getting positions
  let dx = parseInt(
    window.getComputedStyle(decoit, null).getPropertyValue("left")
  );
  let dy = parseInt(
    window.getComputedStyle(decoit, null).getPropertyValue("top")
  );
  let px = parseInt(
    window.getComputedStyle(police, null).getPropertyValue("left")
  );
  let py = parseInt(
    window.getComputedStyle(police, null).getPropertyValue("top")
  );

  let offsetX = Math.abs(dx - px);
  let offsetY = Math.abs(dy - py);

  // Debug logs
  // console.log("Decoit:", dx, dy);
  // console.log("Police:", px, py);
//   console.log("Offset Y value:", offsetY);
//   console.log("Offset X value:", offsetX);

  // Collision detection
  if (offsetX < 93 && offsetY < 50) {
    gameOver.style.visibility = "visible";
    console.log("Your game is Over");
  }
}, 100);
