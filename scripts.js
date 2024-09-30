

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const rnd = Math.floor(Math.random() * 3);
    if (rnd === 0) {
        return "Rock";
    } else if (rnd === 1) {
        return "Paper";
    } else if (rnd === 2) {
        return "Scissor";
    }
}

function getHumanChoice() {
    const userChoice = prompt("Enter Rock, Paper, Scissor: ");
    if (userChoice.toLowerCase() === "rock" || userChoice.toLowerCase() === "paper" || userChoice.toLowerCase() === "scissor") {
        return userChoice;
    } else {
        return "Invalid choice, please choose rock, paper, or scissor.";
    }

}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tied....");

    } else if (
        computerChoice === 'Rock' && humanChoice === 'Scissor'
        || computerChoice === 'Paper' && humanChoice === 'Rock'
        || computerChoice === 'Scissor' && humanChoice === 'Paper'
    ) {
        console.log("You lose " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }

    else {
        console.log("You win " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    console.log("Your Score: " + humanScore + " Computer Score: " + computerScore);
}


function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1));
        playRound(getHumanChoice(), getComputerChoice());
    }

}

playGame();