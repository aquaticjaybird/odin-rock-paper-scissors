function playGame() {
    function getComputerChoice() {
        const randNumber = Math.floor((Math.random() * 3));
        let choiceString;
        switch(randNumber) {
            case 0:
                choiceString = 'Rock';
                break;
            case 1:
                choiceString = 'Paper';
                break;
            case 2:
                choiceString = 'Scissors';
                break;
        }
        return choiceString;
    }
    function appendResult(resultText) {
        const lastResult = document.createElement("p");
        lastResult.textContent = resultText;
        roundResultDisplay.appendChild(lastResult);
    }
    function finishGame() {
        isGameFinished = true;
        if (humanScore === 5) {
            gameResultDisplay.textContent = "Human wins the game!";
        }
        if (computerScore === 5) {
            gameResultDisplay.textContent = "Computer wins the game!";
        }
    }

    function resetGameStates() {
        isGameFinished = false;
        humanScore = 0;
        computerScore = 0;
        humanScoreDisplay.textContent = "0";
        computerScoreDisplay.textContent = "0";
        gameResultDisplay.textContent = "";
        while (roundResultDisplay.firstChild) {
            roundResultDisplay.removeChild(roundResultDisplay.firstChild);
        }
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            appendResult(`It's a draw!(${humanChoice})`);
        } else if (
          (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
          (humanChoice === 'Paper' && computerChoice === 'Rock') ||
          (humanChoice === 'Scissors' && computerChoice === 'Paper')
          ) {
            appendResult(`${humanChoice} beats ${computerChoice}! Human wins.`);
            humanScore++;
            humanScoreDisplay.textContent = humanScore;
        } else if (
          (computerChoice === 'Rock' && humanChoice === 'Scissors') ||
          (computerChoice === 'Paper' && humanChoice === 'Rock') ||
          (computerChoice === 'Scissors' && humanChoice === 'Paper')
          ) {
            appendResult(`${computerChoice} beats ${humanChoice}! Computer wins.`);
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        }
        const scoresToWin = 5;
        if (humanScore >= scoresToWin || computerScore >= scoresToWin) {
            finishGame();
        }
    }
    let isGameFinished = false;
    let humanScore = 0;
    let computerScore = 0;
    const humanScoreDisplay = document.querySelector(".human-score");
    const computerScoreDisplay = document.querySelector(".computer-score");
    
    const roundResultDisplay = document.querySelector(".round-result-container");
    const gameResultDisplay = document.querySelector(".game-result");

    const choiceContainer = document.querySelector(".choice-container");
    choiceContainer.addEventListener("click", (event) => {
        if (isGameFinished) {
            resetGameStates();
        }
        const humanChoice = event.target.textContent;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        });
}
playGame();
