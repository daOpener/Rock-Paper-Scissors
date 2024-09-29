



const userChoice = prompt("Enter Rock, Paper, Scissor: ");
const humanScore = 0;
const computerScore = 0;
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

    if (userChoice.toLowerCase() === "rock" || userChoice.toLowerCase() === "paper" || userChoice.toLowerCase() === "scissor") {
        return userChoice;
    } else {
        return "Invalid choice, please choose rock, paper, or scissor.";
    }

}
console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tied....");

    } else if (
        computerChoice === 'Rock' && humanChoice === 'Scissor'
        || computerChoice === 'Paper' && humanChoice === 'Rock'
        || computerChoice === 'Scissor' && humanChoice === 'Paper'
    ) {
        console.log("You lose " + computerChoice + " beats " + humanChoice);
    }

    else {
        console.log("You win " + humanChoice + " beats " + computerChoice);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
    playRound();
    console.log(computerScore);
}
//step 1: getting one of the random from rock, paper, scissor using math.random
//step 2: get the human choice make it sure its valid choice because we combined it to the other choice.