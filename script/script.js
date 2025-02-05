console.log("RPS Arena");

let computerMode;
let playerMode;
const score = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

let win = document.querySelector(".wins");
win.innerHTML = `${score.Wins}`;
let losses = document.querySelector(".losses");
losses.innerHTML = `${score.Losses}`;
let tie = document.querySelector(".tie");
tie.innerHTML = `${score.Ties}`;
let results = document.querySelector(".result");
let moves = document.querySelector(".moves");

const result = (playerMode) => {
  const modes = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  computerMode = modes[random];

  if (
    (computerMode === "rock" && playerMode === "scissors") ||
    (computerMode === "scissors" && playerMode === "paper") ||
    (computerMode === "paper" && playerMode === "rock")
  ) {
    score.Losses += 1;
    results.innerHTML = `${"You Lose"}`;
  } else if (
    (computerMode === "rock" && playerMode === "paper") ||
    (computerMode === "scissors" && playerMode === "rock") ||
    (computerMode === "paper" && playerMode === "scissors")
  ) {
    score.Wins += 1;
    results.innerHTML = `${"You Win"}`;
  } else if (
    (computerMode === "rock" && playerMode === "rock") ||
    (computerMode === "paper" && playerMode === "paper") ||
    (computerMode === "scissors" && playerMode === "scissors")
  ) {
    score.Ties += 1;
    results.innerHTML = `${"Tie"}`;
  } else {
    alert("Invalid input");
  }

  localStorage.setItem("score", JSON.stringify(score));
  win.innerHTML = `${score.Wins}`;
  losses.innerHTML = `${score.Losses}`;
  tie.innerHTML = `${score.Ties}`;
  moves.innerHTML = `You ${
    playerMode === "rock"
      ? '<img class="img" src="./images/rock-emoji.png" alt=""></img>'
      : playerMode === "paper"
      ? '<img class="img" src="./images/paper-emoji.png" alt=""></img>'
      : '<img class="img" src="./images/scissors-emoji.png" alt=""></img>'
  } - ${
    computerMode === "rock"
      ? '<img class="img" src="./images/rock-emoji.png" alt=""></img>'
      : computerMode === "paper"
      ? '<img class="img" src="./images/paper-emoji.png" alt=""></img>'
      : '<img class="img" src="./images/scissors-emoji.png" alt=""></img>'
  } Computer`;
};

const resetScore = () => {
  score.Wins = 0;
  score.Losses = 0;
  score.Ties = 0;
  localStorage.removeItem("score");
  win.innerHTML = `${score.Wins}`;
  losses.innerHTML = `${score.Losses}`;
  tie.innerHTML = `${score.Ties}`;
  moves.innerHTML = ``;
  results.innerHTML = ``;
};

let interval;

const autoPlay=()=>{
  function play() {
    const modes = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    playerMode = modes[random];
    result(playerMode);
  }

  if(auto.innerHTML === "Auto Play"){
    auto.innerHTML = "Stop Playing";

    if(interval){
      clearInterval(interval)
    }
    interval = setInterval(play, 1000);
  } else {
    auto.innerHTML = "Auto Play";
    clearInterval(interval)
    interval=null;
  }
}

let resInterval;

const sureReset=()=>{
  if(score.Wins===0 && score.Ties===0 && score.Losses===0){
    sure.innerHTML="Score is already 0!";
    if(resInterval){
      clearInterval(resInterval);
    }
    resInterval=setTimeout(() => {
      sure.innerHTML="";
    }, 1000);
  } else {
    sure.innerHTML=`<div>Are you sure to reset the score? <button id="btn6">Yes</button> <button id="btn7">No</button></div>`
    const yes=document.getElementById("btn6")
    const no=document.getElementById("btn7")
    yes.addEventListener("click", () => {
      resetScore();
      sure.innerHTML="";
    })
    no.addEventListener("click", () => {
      sure.innerHTML="";
    })
  }
}

document.getElementById("btn1").addEventListener("click", () => {
  playerMode = "rock";
  result(playerMode);
});
document.getElementById("btn2").addEventListener("click", () => {
  playerMode = "paper";
  result(playerMode);
});
document.getElementById("btn3").addEventListener("click", () => {
  playerMode = "scissors";
  result(playerMode);
});
document.getElementById("btn4").addEventListener("click", () => {
  sureReset();
});
const sure=document.querySelector(".sureRes")
const auto=document.getElementById("btn5")
auto.addEventListener("click", () => {
  autoPlay();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    autoPlay()
  } else if(event.key === "Backspace"){
    sureReset()
  }
})
