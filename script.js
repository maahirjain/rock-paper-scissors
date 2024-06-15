let humanScore = 0;
let computerScore = 0;
let humanChoice;
const humanChoices = document.querySelector(".human-choices");

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
    humanChoices.addEventListener("click", playRound, false);
}


function computeWinner(humanChoice, computerChoice) {
    //0: tie; 1: player wins; -1: computer wins
    if (humanChoice === computerChoice) {
        return 0;
    } else if (humanChoice === "rock" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "rock"
    ) {
        return -1;
    } else {
        return 1;
    }
}

function playRound(e) {
    if (humanScore >= 16 || computerScore >= 16) {
        const header = document.querySelector(".header");
        if (humanScore > computerScore) {
            header.textContent = `You win ${humanScore}–${computerScore}!`;
        } else if (humanScore === computerScore) {
            header.textContent = `It's a tie (Score: ${humanScore}–${computerScore}).`;
        } else {
            header.textContent = `You lose ${humanScore}–${computerScore} :(`
        }
        document.querySelector("a").removeAttribute("href");
    }

    const nodes = humanChoices.getElementsByTagName('*');
    const computerNodes = document.querySelector(".computer-choices").getElementsByTagName('*');
    for(var i = 0; i < nodes.length; i++) {
        nodes[i].disabled = true;
    }

    let humanSelection = e.target.className;
    let computerSelection = getComputerChoice();
    let humanSelectionBtn = document.querySelector(".human-choices ." + humanSelection);
    let computerSelectionBtn = document.querySelector(".computer-choices ." + computerSelection);

    if (computeWinner(humanSelection, computerSelection) === 0) {
        humanSelectionBtn.style.backgroundColor = "skyblue";
        computerSelectionBtn.style.backgroundColor = "skyblue";
        humanScore += 0.5;
        computerScore += 0.5;

        const halfScoreTile1 = document.createElement("div");
        halfScoreTile1.classList.add("half-score-tile");

        const halfScoreTile2 = document.createElement("div");
        halfScoreTile2.classList.add("half-score-tile");
        document.querySelector(".human-score-tiles").prepend(halfScoreTile1);
        document.querySelector(".computer-score-tiles").prepend(halfScoreTile2);
    } else if (computeWinner(humanSelection, computerSelection) === 1) {
        humanSelectionBtn.style.backgroundColor = "#A1DD70";
        computerSelectionBtn.style.backgroundColor = "#EE4E4E";
        humanScore++;

        const scoreTile = document.createElement("div");
        scoreTile.classList.add("score-tile");
        document.querySelector(".human-score-tiles").prepend(scoreTile);
    } else {
        humanSelectionBtn.style.backgroundColor = "#EE4E4E";
        computerSelectionBtn.style.backgroundColor = "#A1DD70"; 
        computerScore++;

        const scoreTile = document.createElement("div");
        scoreTile.classList.add("score-tile");
        document.querySelector(".computer-score-tiles").prepend(scoreTile);
    }

    setTimeout(() => {
        for(var i = 0; i < nodes.length; i++) {
            nodes[i].disabled = false;
            nodes[i].style.backgroundColor = "white";
            computerNodes[i].style.backgroundColor = "white";
        }
      }, 1000);
}

getHumanChoice();