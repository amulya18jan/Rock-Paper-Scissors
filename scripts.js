console.log("ROCK-PAPER-SCISSORS to the game");
function getHumanChoice () {
   return prompt("Take between Rock, Paper, Scissors: ");
} 
let humanScore = Number(localStorage.getItem("humanScore"))||0;
let computerScore =Number(localStorage.getItem("computerScore"))||0;
let countDraw = Number(localStorage.getItem("countDraw"))||0;
//let player2= prompt("Take between Rock, Paper, Scissors: ");
// function rps(player1,player2){
//     if(player1.includes("Rock")&&player2.includes("Paper")){
//         return `Player 2 won because Player1 chooses ${player1} and Player2 chooses ${player2}`;
//     } else if (player1.includes("Paper")&&player2.includes("Rock")){
//         return `Player 1 won because Player1 chooses ${player1} and Player2 chooses ${player2}`;
//     } else if (player1.includes("Paper")&&player2.includes("Scissors")){
//         return `Player 2 won because Player1 chooses ${player1} and Player2 chooses ${player2}`;
//     } else if (player1.includes("Scissors")&&player2.includes("Paper")){
//         return `Player 1 won because Player1 chooses ${player1} and Player2 chooses ${player2}`;
//     } else if (player1.includes("Rock")&&player2.includes("Scissors")){
//         return `Player 1 won because Player1 chooses ${player1} and Player2 chooses ${player2}`;
//     } else if (player1.includes("Scissors")&&player2.includes("Rock")){
//         return `Player 2 won because Player1 chooses ${player1} and Player2 chooses ${player2}`;
//     } else if (player1.includes("Scissors")&&player2.includes("Scissors")){
//         return `Tie`;
//     }else if (player1.includes("Rock")&&player2.includes("Rock")){
//         return `Tie`;
//     }else if (player1.includes("Paper")&&player2.includes("Paper")){
//         return `Tie`;
//     }else {
//         return "Invalid Text";
//     }
// }
function getComputerChoice(){
 const key ={
    0 : "rock",
    1 : "paper",
    2 : "scissors"
 }
 const randomNumber = Math.floor(Math.random()*3);
 return key[randomNumber];
}

function playRound(humanSelection, computerSelection) {
    const p1 = humanSelection.toLowerCase();

    const rules = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    console.log(`Human: ${p1}`);
    console.log(`Computer: ${computerSelection}`);
    if(!rules[p1]){
        console.log("invalid");
        return 
    } ;
    if (p1 === computerSelection) {
        countDraw++;
        console.log("Draw"); 
        return   
    }

    if (rules[p1] === computerSelection) {
        humanScore++;
        console.log("Human wins!");
    } else {
        computerScore++;
        console.log("Computer wins!");
    }

    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Draw: ${countDraw}`);
}
for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
   
}

 
console.log("Final");
if(humanScore > computerScore){
        console.log("Human Won") ;
    }else{
        console.log("Computer Won") ;
    }
localStorage.setItem("humanScore", humanScore);
localStorage.setItem("computerScore", computerScore);
localStorage.setItem("countDraw",countDraw);

// console.log(getComputerChoice());