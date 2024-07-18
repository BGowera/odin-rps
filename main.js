console.log("Let's play rock, paper, scissors!")

//Get user input
//let playerChoice = prompt("Rock,paper or scissors?").toLowerCase();

//Create randomized computer choices

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = parseInt(Math.floor(Math.random() * 3))
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

//compare user choice and computer choice

function getRoundWinner() {
    let winner;
    let computerChoice = getComputerChoice();
    if (playerChoice == "rock" && computerChoice == "paper") {
        winner=`Oh no, looks like the computer won this round!`;
}else if()

    return winner;
}


