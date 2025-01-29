console.log("RPS Arena")

const modes=["rock","paper","scissors"]
const random=Math.floor(Math.random() * 3);
const computerMode=modes[random];
let playerMode;
const result=()=>{
    if(computerMode==="rock" && playerMode==="scissors"){
        alert(`You choose ${playerMode} and computer choose ${computerMode}. the winner is  Computer!`);
    } else if(computerMode==="rock" && playerMode==="paper"){
        alert(`You choose ${playerMode} and computer choose ${computerMode}. the winner is  You!`);
    } else if(computerMode==="rock" && playerMode==="rock"){
        alert(`You choose ${playerMode} and computer choose ${computerMode}. the game is  Tie!`);
    } else if(computerMode==="paper" && playerMode==="paper"){
        alert(`You choose ${playerMode} and computer choose ${computerMode}. the game is  Tie!`);
    } else if(computerMode==="paper" && playerMode==="rock"){
        alert(`You choose ${playerMode} and computer choose ${computerMode}. the winner is  Computer!`);
    } else if(computerMode==="paper" && playerMode==="scissors"){
        alert(`You choose ${playerMode} and computer choose ${computerMode}. the winner is  You!`);
    } else if(computerMode==="scissors" && playerMode==="paper"){
        alert(`You choose ${playerMode} and computer choose ${computerMode}. the winner is  Computer!`);
    } else if(computerMode==="scissors" && playerMode==="rock"){
        alert(`You choose ${playerMode} and computer choose ${computerMode}. the winner is  You!`);
    } else if(computerMode==="scissors" && playerMode==="scissors"){
        alert(`You choose ${playerMode} and computer choose ${computerMode}. the game is  Tie!`);
    } else {
        alert("Invalid input");
    }
}

document.getElementById("btn1").addEventListener("click",()=>{
    playerMode="rock";
    result();

})
document.getElementById("btn2").addEventListener("click",()=>{
    playerMode="paper";
    result();
})
document.getElementById("btn3").addEventListener("click",()=>{
    playerMode="scissors";
    result();
})