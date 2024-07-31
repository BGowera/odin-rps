//DOM Elements
const playerScorePara = document.querySelector(".player-score-para");
const computerScorePara = document.querySelector(".computer-score-para");
const roundNumberHeading = document.querySelector(".round-number-heading");
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const computerChoicePara = document.querySelector(".computer-choice-para");
const roundWinnerPara = document.querySelector(".round-winner-para");

computerChoicePara.textContent = "";
roundWinnerPara.textContent = "";
roundNumberHeading.textContent = "";

let computerScore = 0;
let playerScore = 0;
let playerChoice;
let computerChoice;
let roundNumber = 1;





//functions

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


function updateScore() {
	roundNumberHeading.textContent = `Round ${roundNumber}! Rock, paper or scissors?`;
	playerScorePara.textContent = `Player Score:${playerScore}`;
	computerScorePara.textContent = `Computer Score:${computerScore}`;
}



function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound() {
	roundNumber++;
		if (
		(playerChoice == "rock" && computerChoice == "scissors") ||
		(playerChoice == "paper" && computerChoice == "rock") ||
		(playerChoice == "scissors" && computerChoice == "paper")
	) {
		computerChoicePara.textContent = `Computer played ${computerChoice}. ${capitalizeFirstLetter(playerChoice)} beats ${computerChoice}.`;
		playerScore++;
		document.body.style.backgroundColor = "green";
	} else if (
		(playerChoice == "rock" && computerChoice == "paper") ||
		(playerChoice == "paper" && computerChoice == "scissors") ||
		(playerChoice == "scissors" && computerChoice == "rock")
	) {
		computerScore++;
		computerChoicePara.textContent = `Computer played ${computerChoice}. ${capitalizeFirstLetter(computerChoice)} beats ${playerChoice}.`;
		document.body.style.backgroundColor = "red";
	} else {
		computerChoicePara.textContent = `Computer played ${computerChoice}. This round was a draw.`;
		document.body.style.backgroundColor = "#e2e2e2";
	}
}
console.log(roundNumber)
function playRock() {

	playerChoice = "rock";
	computerChoice = getComputerChoice();
	playRound();
	updateScore();

}

function playPaper() {
	playerChoice = "paper";
	computerChoice = getComputerChoice();
	playRound();
	updateScore();
}

function playScissors() {
	playerChoice = "scissors";
	computerChoice = getComputerChoice();
	playRound();
	updateScore();
}

if (roundNumber > 5) {
	alert("hello");
}


updateScore();
//event listeners

rockBtn.addEventListener("click", playRock);
paperBtn.addEventListener("click", playPaper);
scissorsBtn.addEventListener("click", playScissors);
