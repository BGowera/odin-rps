// DOM Elements
const playerScorePara = document.querySelector(".player-score-para");
const computerScorePara = document.querySelector(".computer-score-para");
const roundNumberHeading = document.querySelector(".round-number-heading");
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const computerChoicePara = document.querySelector(".computer-choice-para");
const roundWinnerPara = document.querySelector(".round-winner-para");

computerChoicePara.innerText = "";
roundWinnerPara.innerText = "";
roundNumberHeading.innerText = "";

let computerScore = 0;
let playerScore = 0;
let playerChoice;
let computerChoice;
let roundNumber = 1;
let turnsLeft = 5;

// Functions

function getComputerChoice() {
	let choices = ["rock", "paper", "scissors"];
	let randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function updateScore() {
	roundNumberHeading.innerText = `Round ${roundNumber}! Rock, paper or scissors?`;
	playerScorePara.innerText = `Player Score: ${playerScore}`;
	computerScorePara.innerText = `Computer Score: ${computerScore}`;
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}



function checkWinner() {
	if (playerScore > computerScore) {
		console.log("Player wins");
		roundNumberHeading.innerText = `Congratulations! You win!`;
		document.body.style.backgroundColor = "green";

	} else if (computerScore > playerScore) {
		console.log("Computer wins");
		roundNumberHeading.innerText = `Sorry! The computer won this one!`;
		document.body.style.backgroundColor = "red";
	
	} else {
		console.log("It's a tie");
		roundNumberHeading.innerText = `This game ended on a tie`;
		document.body.style.backgroundColor = "#e2e2e2";
	}
	rockBtn.disabled = true;
	paperBtn.disabled = true;
	scissorsBtn.disabled = true;
}


function playRound() {
		turnsLeft--;
roundNumber++;
console.log(turnsLeft, roundNumber)
	if (turnsLeft == 0) {
		checkWinner();
		return
	}
	if (
		(playerChoice == "rock" && computerChoice == "scissors") ||
		(playerChoice == "paper" && computerChoice == "rock") ||
		(playerChoice == "scissors" && computerChoice == "paper")
	) {
		computerChoicePara.innerText = `Computer played ${computerChoice}. ${capitalizeFirstLetter(
			playerChoice
		)} beats ${computerChoice}.`;
		playerScore++;
		document.body.style.backgroundColor = "green";
	} else if (
		(playerChoice == "rock" && computerChoice == "paper") ||
		(playerChoice == "paper" && computerChoice == "scissors") ||
		(playerChoice == "scissors" && computerChoice == "rock")
	) {
		computerScore++;
		computerChoicePara.innerText = `Computer played ${computerChoice}. ${capitalizeFirstLetter(
			computerChoice
		)} beats ${playerChoice}.`;
		document.body.style.backgroundColor = "red";
	} else {
		computerChoicePara.innerText = `Computer played ${computerChoice}. This round was a draw.`;
		document.body.style.backgroundColor = "#e2e2e2";
		
	}
	
	updateScore()
}


function playRock() {
	playerChoice = "rock";
	computerChoice = getComputerChoice();
	playRound();
}

function playPaper() {
	playerChoice = "paper";
	computerChoice = getComputerChoice();
	playRound();
}

function playScissors() {
	playerChoice = "scissors";
	computerChoice = getComputerChoice();
	playRound();
}



updateScore();
// Event listeners

rockBtn.addEventListener("click", playRock);
paperBtn.addEventListener("click", playPaper);
scissorsBtn.addEventListener("click", playScissors);
