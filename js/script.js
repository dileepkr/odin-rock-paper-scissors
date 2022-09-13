// Game is played from the console
// played against the computer
// Function getComputerChoice -> returns one of Rock, Paper, Scissor at random
function getComputerChoice() {
    const outcomes = ["Rock", "Paper", "Scissor"]
    return outcomes[Math.floor(Math.random()*outcomes.length)]
}
// Function playRound -> parameters -> playerSelection(caseInsensitive), computerSelection. returns -> "You Lose! Paper beats Rock"
// Function game -> calls playRound 5times with each playerSelection obtained from prompt, 
// console logs winner of each round and display Winner of game at the end