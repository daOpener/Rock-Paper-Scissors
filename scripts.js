let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const rnd = Math.floor(Math.random() * 3);
    if (rnd === 0) {
        return "rock";
    } else if (rnd === 1) {
        return "paper";
    } else if (rnd === 2) {
        return "scissor";
    }
}

function getHumanChoice() {
    const userChoice = prompt("Enter Rock, Paper, Scissor: ");
    if (userChoice.toLowerCase() === "rock" || userChoice.toLowerCase() === "paper" || userChoice.toLowerCase() === "scissor") {
        return userChoice.toLowerCase();
    } else {
        return null;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);

    } else if (
        computerChoice === 'rock' && humanChoice === 'scissor'
        || computerChoice === 'paper' && humanChoice === 'rock'
        || computerChoice === 'scissor' && humanChoice === 'paper'
    ) {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }

    else {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    console.log("Your Score: " + humanScore + " Computer Score: " + computerScore);
}


function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1));
        let humanChoice = getHumanChoice();

        while (humanChoice === null) {
            console.log("Invalid choice, please choose Rock, Paper, or Scissor.");
            humanChoice = getHumanChoice();
        }

        playRound(humanChoice, getComputerChoice());
    }

}

playGame();
