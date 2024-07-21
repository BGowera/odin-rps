//Get user input
function getPlayerChoice() {
    let choice = prompt('Rock, paper,or scissors?').toLowerCase();

    return choice;
}

//Create randomized computer choices

function getComputerChoice() {
	let choices = ["rock", "paper", "scissors"];
	let randomNumber = parseInt(Math.floor(Math.random() * 3));
	let computerChoice;

	if (randomNumber == 0) {
		computerChoice = choices[0];
	} else if (randomNumber == 1) {
		computerChoice = choices[1];
	} else {
		computerChoice = choices[2];
	}

	return computerChoice;
}

//playGame function
let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
let computerScore = 0;
let playerScore = 0;


function playGame() {
    let roundWinner;

    if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")
    ) {
        roundWinner = "Congratulations, you won this round!";
        playerScore++
    } else if (
        (playerChoice == "rock" && computerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "rock")
    ) {
        roundWinner = "Too bad, the computer wins this time!";
        computerScore++;
    } else {
        roundWinner = 'Looks like a draw!'
    }
    return roundWinner;
}


console.log(playerChoice);
console.log(computerChoice);
console.log(playGame(computerChoice, playerChoice));
console.log(playerScore);
console.log(computerScore);