console.log("RPS Arena");

let computerMode;
let playerMode;
const score={
  Wins:0,
  Losses:0,
  Ties:0,
};
const result = () => {
  const modes = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  computerMode = modes[random];
  if (computerMode === "rock" && playerMode === "scissors") {
    score.Losses+=1;
    alert(
      `You choose ${playerMode} and computer choose ${computerMode}. the winner is  Computer!\nWins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`
    );
  } else if (computerMode === "rock" && playerMode === "paper") {
    score.Wins+=1;
    alert(
      `You choose ${playerMode} and computer choose ${computerMode}. the winner is  You!\nWins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`
    );
  } else if (computerMode === "rock" && playerMode === "rock") {
    score.Ties+=1;
    alert(
      `You choose ${playerMode} and computer choose ${computerMode}. the game is  Tie!\nWins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`
    );
  } else if (computerMode === "paper" && playerMode === "paper") {
    score.Ties+=1;
    alert(
      `You choose ${playerMode} and computer choose ${computerMode}. the game is  Tie!\nWins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`
    );
  } else if (computerMode === "paper" && playerMode === "rock") {
    score.Losses+=1;
    alert(
      `You choose ${playerMode} and computer choose ${computerMode}. the winner is  Computer!\nWins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`
    );
  } else if (computerMode === "paper" && playerMode === "scissors") {
    score.Wins+=1;
    alert(
      `You choose ${playerMode} and computer choose ${computerMode}. the winner is  You!\nWins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`
    );
  } else if (computerMode === "scissors" && playerMode === "paper") {
    score.Losses+=1;
    alert(
      `You choose ${playerMode} and computer choose ${computerMode}. the winner is  Computer!\nWins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`
    );
  } else if (computerMode === "scissors" && playerMode === "rock") {
    score.Wins+=1;
    alert(
      `You choose ${playerMode} and computer choose ${computerMode}. the winner is  You!\nWins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`
    );
  } else if (computerMode === "scissors" && playerMode === "scissors") {
    score.Ties+=1;
    alert(
      `You choose ${playerMode} and computer choose ${computerMode}. the game is  Tie!\nWins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`
    );
  } else {
    alert("Invalid input");
  }
};

const resetScore=()=>{
  score.Wins=0;
  score.Losses=0;
  score.Ties=0;
  alert(`Score reset: Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`)
}

document.getElementById("btn1").addEventListener("click", () => {
  playerMode = "rock";
  result();
});
document.getElementById("btn2").addEventListener("click", () => {
  playerMode = "paper";
  result();
});
document.getElementById("btn3").addEventListener("click", () => {
  playerMode = "scissors";
  result();
});
document.getElementById("btn4").addEventListener("click", () => {
  resetScore()
});
