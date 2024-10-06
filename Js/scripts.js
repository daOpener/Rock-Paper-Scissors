let humanScore = 0;
let computerScore = 0;
let roundsLeft = 5;

const process = document.querySelector("#process");
const broScore = document.querySelector(".broScore");
const broScobot = document.querySelector(".broScobot");
const roundDisplay = document.querySelector("h1");
const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        process.textContent = `It's a tie! Both chose ${humanChoice}`;
    } else if (
        (computerChoice === 'rock' && humanChoice === 'scissor') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissor' && humanChoice === 'paper')
    ) {
        computerScore++;
        broScobot.innerText = `Computer: ${computerScore}`;
        process.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    } else {
        humanScore++;
        broScore.innerText = `Player: ${humanScore}`;
        process.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }

    roundsLeft--;
    roundDisplay.textContent = `Rounds: ${roundsLeft}`;

    if (roundsLeft === 0) endGame();
}

function endGame() {
    const winnerMessage = humanScore > computerScore ? "You won the game!" :
        computerScore > humanScore ? "The computer won the game!" : "It's a tie!";

    process.textContent = `Game Over! ${winnerMessage}`;

    document.querySelectorAll("img").forEach(img => img.removeEventListener("click", handleChoice));
}

function handleChoice(event) {
    const humanChoice = event.target.id;
    playRound(humanChoice);
}

function startGame() {
    humanScore = 0;
    computerScore = 0;
    roundsLeft = 5;

    broScore.innerText = "Player: 0";
    broScobot.innerText = "Computer: 0";
    roundDisplay.innerText = "Rounds: 5";
    process.textContent = "Choose Rock, Paper, or Scissor.";

    document.querySelectorAll("img").forEach(img => img.addEventListener("click", handleChoice));
}

document.querySelector("button").addEventListener("click", startGame);
