console.log("ROCK-PAPER-SCISSORS to the game");
let player1 = prompt("Take between Rock, Paper, Scissors: ");
let player2= prompt("Take between Rock, Paper, Scissors: ");
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
function rps(player1,player2){
p1 = player1.toLowerCase();
p2 = player2.toLowerCase();
const rules = {
    rock:"scissors",
    scissors:"paper",
    paper:"rock",
}
if(!rules[p1] || !rules[p2]){
    return Invalid;
};
if(p1 == p2) return "Draw";

return rules[p1] === p2 ? "Player 1 wins" : "Player2 wins";
}
 console.log(rps(player1,player2));