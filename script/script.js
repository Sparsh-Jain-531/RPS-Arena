console.log("RPS Arena");

let computerMode;
let playerMode;
const score=JSON.parse(localStorage.getItem("score")) || {
  Wins:0,
  Losses:0,
  Ties:0,
};

let win=document.querySelector(".wins")
win.innerHTML=`${score.Wins}`
let losses=document.querySelector(".losses")
losses.innerHTML=`${score.Losses}`
let tie=document.querySelector(".tie")
tie.innerHTML=`${score.Ties}`
let results=document.querySelector(".result")
let moves=document.querySelector(".moves")

const result = (playerMode) => {

  const modes = ["rock", "paper", "scissors"];

  const random = Math.floor(Math.random() * 3);

  computerMode = modes[random];

  if ((computerMode === "rock" && playerMode === "scissors") || (computerMode === "scissors" && playerMode === "paper") || (computerMode === "paper" && playerMode === "rock")) {
    score.Losses+=1;
    results.innerHTML=`${"You Lose"}`;
  } else if ((computerMode === "rock" && playerMode === "paper") || (computerMode === "scissors" && playerMode === "rock") || (computerMode === "paper" && playerMode === "scissors")) {
    score.Wins+=1;
    results.innerHTML=`${"You Win"}`;
  } else if ((computerMode === "rock" && playerMode === "rock") || (computerMode === "paper" && playerMode === "paper") || (computerMode === "scissors" && playerMode === "scissors")) {
    score.Ties+=1;
    results.innerHTML=`${"Tie"}`;
  } else {
    alert("Invalid input");
  }

  localStorage.setItem("score",JSON.stringify(score));
  win.innerHTML=`${score.Wins}`;
  losses.innerHTML=`${score.Losses}`;
  tie.innerHTML=`${score.Ties}`;
  // moves.innerHTML=`You chooses ${playerMode} & computer chooses ${computerMode}`;
  // moves.innerHTML=`<img class="img" src="./rock-emoji.png" alt=""></img>`;
  moves.innerHTML=`You ${playerMode==="rock"? '<img class="img" src="./images/rock-emoji.png" alt=""></img>' : playerMode==="paper" ? '<img class="img" src="./images/paper-emoji.png" alt=""></img>' : '<img class="img" src="./images/scissors-emoji.png" alt=""></img>'} - ${computerMode==="rock"? '<img class="img" src="./images/rock-emoji.png" alt=""></img>' : computerMode==="paper" ? '<img class="img" src="./images/paper-emoji.png" alt=""></img>' : '<img class="img" src="./images/scissors-emoji.png" alt=""></img>'} Computer`;
};

const resetScore=()=>{
  score.Wins=0;
  score.Losses=0;
  score.Ties=0;
  localStorage.removeItem("score");
  win.innerHTML=`${score.Wins}`
  losses.innerHTML=`${score.Losses}`
  tie.innerHTML=`${score.Ties}`
  moves.innerHTML=``
  results.innerHTML=``;
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
  resetScore()
});
