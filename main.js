//DOM Elements
const playerScorePara = document.querySelector('.player-score-para');
const computerScorePara=document.querySelector('.computer-score-para')
const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const computerChoicePara = document.querySelector('.computer-choice-para');
const roundWinnerPara=document.querySelector('.round-winner-para')

computerChoicePara.textContent = '';
roundWinnerPara.textContent = '';

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

function updateScore() {
    playerScorePara.textContent = `Player Score:${playerScore}`;
    computerScorePara.textContent = `Computer Score:${computerScore}`;
}

updateScore()