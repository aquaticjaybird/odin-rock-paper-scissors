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
    function appendRoundResult(resultText) {
        const lastRoundResult = document.createElement("p");
        lastRoundResult.textContent = resultText;
        roundResultDisplay.appendChild(lastRoundResult);
    }
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            appendRoundResult(`It's a draw!(${humanChoice})`);
        } else if (
          (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
          (humanChoice === 'Paper' && computerChoice === 'Rock') ||
          (humanChoice === 'Scissors' && computerChoice === 'Paper')
          ) {
            appendRoundResult(`${humanChoice} beats ${computerChoice}! Human wins.`);
            humanScore++;
            humanScoreDisplay.textContent = humanScore;
        } else if (
          (computerChoice === 'Rock' && humanChoice === 'Scissors') ||
          (computerChoice === 'Paper' && humanChoice === 'Rock') ||
          (computerChoice === 'Scissors' && humanChoice === 'Paper')
          ) {
            appendRoundResult(`${computerChoice} beats ${humanChoice}! Computer wins.`);
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        } else {
            console.log(`Invalid input! Computer wins(${computerChoice}).`);
            computerScore++;
        }
    }

    let humanScore = 0;
    let computerScore = 0;
    const humanScoreDisplay = document.querySelector(".human-score");
    const computerScoreDisplay = document.querySelector(".computer-score");
    
    const roundResultDisplay = document.querySelector(".round-result-container");

    const choiceContainer = document.querySelector(".choice-container");
    choiceContainer.addEventListener("click", (event) => {
        const humanChoice = event.target.textContent;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        });
}
playGame();
