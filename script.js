let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors!");

    while (humanChoice.toLowerCase() !== "rock" 
        && humanChoice.toLowerCase() !== "paper" 
        && humanChoice.toLowerCase() !== "scissors") {
        humanChoice = prompt("You made an unavailable selection. Choose rock, paper, or scissors!");
    }

    return humanChoice.toLowerCase();    
}

function capitalize(str) {
    return str.at(0).toUpperCase() + str.slice(1);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie -- ${capitalize(humanChoice)} VS. ${computerChoice}.`);
        humanScore += 0.5;
        computerScore += 0.5;
    } else if (humanChoice === "rock" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "rock"
    ) {
        console.log(`You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`);
        computerScore++;
    } else {
        console.log(`You win! ${capitalize(humanChoice)} beats ${computerChoice}.`);
        humanScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);