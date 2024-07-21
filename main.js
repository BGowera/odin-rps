//Get user input
let playerChoice = prompt("Rock,paper or scissors?").toLowerCase();

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

//compare user choice and computer choice and update scores

let computerScore = 0;
let playerScore = 0;

let roundWinner;
let computerChoice = getComputerChoice();
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
    roundWinner='Looks like a draw!'
}

//

console.log(playerChoice);
console.log(computerChoice);
console.log(roundWinner);
console.log(playerScore);
console.log(computerScore);