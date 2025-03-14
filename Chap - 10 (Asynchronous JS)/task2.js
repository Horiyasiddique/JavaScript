/**
 * TASK 2 :
 * CREATE A FUNCTION WHIC PRINT sIR 'TEACHER NAME' IS AN INCRIDIBLE TEACHER WITH CURRENT DATE AFTER EVERY 2 SECONDS BUT IT SHOULD START PRINTING WHEN WE CLICK ON STRT BUTTON AND SHOULD STOP WHEN WE CLICK ON STOP BUTTON
 */
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
startButton.addEventListener("click", () => {
  const hiteshSir = setInterval(() => {
    console.log(`Sir Hitesh is amazing teacher ${Date.now()}`);
  }, 1000);
  stopButton.addEventListener("click", () => {
    clearInterval(hiteshSir);
    console.log("Stopped!");
  });
});
