//The Game
let body = document.querySelector("body");
let gameTimerInput = document.querySelector(".game-timer");
let gameStartBtn = document.querySelector(".game-starter");
let sSide = document.querySelector(".s-part");
let lSide = document.querySelector(".l-part");
let resultNotification = document.querySelector(".result-notification");
let restartBtn = document.querySelector(".restart");
let sCounter = document.querySelector(".s-counter");
let lCounter = document.querySelector(".l-counter");

gameStartBtn.addEventListener("click", function startingFunction() {
  let l = 0;
  let s = 0;

  if (gameTimerInput.value == 0 || gameTimerInput.value == " ") {
    resultNotification.innerHTML = "Enter How many seconds you want to play";
  } else {
    body.addEventListener("keydown", function gaming(press) {
      setTimeout(() => {
        gameTimerInput.value = "";
        body.removeEventListener("keydown", gaming);
      }, gameTimerInput.value * 1000);

      if (press.key === "l") {
        l++;
        lCounter.innerHTML = l;
      } else if (press.key === "s") {
        s++;
        sCounter.innerHTML = s;
      }
      return l, s;
    });
  }
  setTimeout(() => {
    gameTimerInput.value = "";
    body.removeEventListener("click", startingFunction);
    if (l > s && s != 0 && l != 0) {
      resultNotification.innerHTML = "L wins";
    } else if (s > l && s != 0 && l != 0) {
      resultNotification.innerHTML = "S wins";
    } else if (l == s && s != 0 && l != 0) {
      resultNotification.innerHTML = "Both are equal, Try again";
    } else if (l == 0 || s == 0) {
      resultNotification.innerHTML = "Someone is not playing";
    }
  }, gameTimerInput.value * 1000);
});
restartBtn.addEventListener("click", () => {
  l = 0;
  s = 0;
  resultNotification.innerHTML = " ";
  sCounter.innerHTML = " ";
  lCounter.innerHTML = " ";
});
