//****************TO DO */
// Figure out user input validation or just fix it in the GUI
// Maybe shorten some of the spaghetti code

//Get user input
function getPlayerChoice() {
	let choice = prompt("Rock, paper,or scissors?").toLowerCase();

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

//playRound function

let computerScore = 0;
let playerScore = 0;

function playRound() {
	let computerChoice = getComputerChoice();
	let playerChoice = getPlayerChoice();

	let roundWinner;

	if (
		(playerChoice == "rock" && computerChoice == "scissors") ||
		(playerChoice == "paper" && computerChoice == "rock") ||
		(playerChoice == "scissors" && computerChoice == "paper")
	) {
		roundWinner = `You played ${playerChoice} and the computer played ${computerChoice} so you win!`;
		playerScore++;
	} else if (
		(playerChoice == "rock" && computerChoice == "paper") ||
		(playerChoice == "paper" && computerChoice == "scissors") ||
		(playerChoice == "scissors" && computerChoice == "rock")
	) {
		roundWinner = `You played ${playerChoice} and the computer played ${computerChoice} so the computer wins!`;
		computerScore++;
	} else {
		roundWinner = `You played ${playerChoice} and the computer played ${computerChoice} so this round was a draw!`;
	}
	return roundWinner;
}

// check who won the game

function checkWinner() {
	let winner;
	if (playerScore > computerScore) {
		winner = "Player";
	} else if (computerScore > playerScore) {
		winner = "Computer";
	} else {
		winner = "Nobody - it was a draw";
	}

	return `Winner:${winner}`;
}

// function to run a five round game

function playGame() {
	for (let i = 1; i < 6; i++) {
		console.log(`Round ${i}`);
		console.log(`Your score:${playerScore}`);
		console.log(`Computer score:${computerScore}`);
		console.log(playRound());
	}
	console.log(`Final score`);
	console.log(`Your score:${playerScore}`);
	console.log(`Computer score:${computerScore}`);
	console.log(checkWinner());
}

let confirmation = prompt("Do you want to play rock, paper, scissors? Yes or No?").toLowerCase();

confirmation == "yes" ? playGame() : alert("See ya!");

