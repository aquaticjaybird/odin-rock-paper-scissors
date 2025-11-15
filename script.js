function getComputerChoice() {
    const randNumber = Math.floor((Math.random() * 3));
    let choiceString;
    switch(randNumber) {
        case 0:
            choiceString = 'rock';
            break;
        case 1:
            choiceString = 'paper';
            break;
        case 2:
            choiceString = 'scissors';
            break;
    }
    return choiceString;
}

function getHumanChoice() {
    const inputString = prompt('Select "rock", "paper" or "scissors": ');
    return inputString.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`It's a draw!(${humanChoice})`);
        } else if (
          (humanChoice === 'rock' && computerChoice === 'scissors') ||
          (humanChoice === 'paper' && computerChoice === 'rock') ||
          (humanChoice === 'scissors' && computerChoice === 'paper')
          ) {
            console.log(`${humanChoice} beats ${computerChoice}! Human wins.`);
            humanScore++;
        } else if (
          (computerChoice === 'rock' && humanChoice === 'scissors') ||
          (computerChoice === 'paper' && humanChoice === 'rock') ||
          (computerChoice === 'scissors' && humanChoice === 'paper')
          ) {
            console.log(`${computerChoice} beats ${humanChoice}! Computer wins.`);
            computerScore++;
        } else {
            console.log(`Invalid input! Computer wins(${computerChoice}).`);
            computerScore++;
        }
    }

    for (let roundNumber = 1; roundNumber <= 5; roundNumber++) {
        console.log(`Round ${roundNumber}: `);
        playRound(getHumanChoice(),getComputerChoice());
    }
    if (humanScore > computerScore) {
        console.log(`Human wins the game!(${humanScore}>${computerScore})`)
    } else {
        console.log(`Computer wins the game!(${computerScore}>${humanScore})`)
    }
}
playGame();
