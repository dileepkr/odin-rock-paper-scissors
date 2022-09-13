// Game is played from the console
// played against the computer
// Function getComputerChoice -> returns one of Rock, Paper, Scissors at random
function getComputerChoice() {
    const outcomes = ["Rock", "Paper", "Scissors"];
    return outcomes[Math.floor(Math.random()*outcomes.length)];
}

// Function playRound -> parameters -> playerSelection(caseInsensitive), computerSelection. 
// returns -> "You Lose! Paper beats Rock"
// rock > scissor, scissor > paper, paper > rock
function playRound(playerSelection, computerSelection) {
    //convert input strings to common format
    let playerSelectionFormatted = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let validChoices = ['Rock', 'Paper', 'Scissors'];
    if (!validChoices.includes(playerSelectionFormatted))  {
        console.log(`Invalid player selection. Allowed options are ${validChoices}`);
    }
    let result = "";
    
    //if playerselection == rock 
    if (playerSelectionFormatted == "Rock") {
        switch (computerSelection) {
            //  if computerselcetion == rock -> Player ties the game
            case "Rock":
                result = "Tie";
                break;
            //  if computerselcetion == paper -> Player lose the game
            case "Paper":
                result = "Lose";
                break;
            //  if computerselcetion == scissor -> Player wins the game
            case "Scissors":
                result = "Win";
                break;
            default:
                console.error("Invalid selection from computer.")
                break;
        }
    }
    //if playerselection == Paper 
    if (playerSelectionFormatted == "Paper") {
        switch (computerSelection) {
            //  if computerselcetion == rock -> Player wind the game
            case "Rock":
                result = "Win";
                break;
            //  if computerselcetion == paper -> Player ties the game
            case "Paper":
                result = "Tie";
                break;
            //  if computerselcetion == scissor -> Player loses the game
            case "Scissors":
                result = "Lose";
                break;
            default:
                console.error("Invalid selection from computer.");
                break;
        }
    }
    //if playerselection == Scissors 
    if (playerSelectionFormatted == "Scissors") {
        switch (computerSelection) {
            //  if computerselcetion == rock -> Player loses the game
            case "Rock":
                result = "Lose";
                break;
            //  if computerselcetion == paper -> Player wins the game
            case "Paper":
                result = "Win";
                break;
            //  if computerselcetion == scissor -> Player ties the game
            case "Scissors":
                result = "Tie";
                break;
            default:
                console.error("Invalid selection from computer.");
                break;
        }
    }
    if (result == "Tie") {
        console.log(`You ${result}! Both selected ${playerSelectionFormatted}`)
    } else if (result == "Win") {
        console.log(`You ${result}! ${playerSelectionFormatted} beats ${computerSelection}`)
    } else if (result == "Lose") {
        console.log(`You ${result}! ${computerSelection} beats ${playerSelectionFormatted}`)
    }
}

// TEST playRound:
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// Function game -> calls playRound 5times with each playerSelection obtained from prompt, 
// console logs winner of each round and display Winner of game at the end