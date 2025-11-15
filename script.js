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

let humanScore = 0;
let computerScore = 0;
// FUNCTION playRound TAKES Human Choice AND Computer choice: Function determines the winner and increments the score.
// IF Human Choice EQUALS Computer Choice:
//     PRINT "It's a draw!"
//     ELSE IF (Human Choice = "rock" AND Computer Choice = "scissors")
//     OR (Human Choice = "paper" AND Computer Choice = "rock")
//     OR (Human Choice = "scissors" AND Computer Choice = "paper")
//         PRINT `"Human Choice" beats "Computer Choice"! Human wins.`
//         INCREMENT Human Score
//     ELSE IF (Computer Choice = "rock" AND Human Choice = "scissors")
//     OR (Computer Choice = "paper" AND Human Choice = "rock")
//     OR (Computer Choice = "scissors" AND Human Choice = "paper")
//         PRINT `"Computer Choice" beats "Human Choice"! Computer wins.`
//         INCREMENT Computer Score
//     ELSE
//         PRINT `Invalid input! Computer wins(Computer Choice).`
//         INCREMENT Computer Score