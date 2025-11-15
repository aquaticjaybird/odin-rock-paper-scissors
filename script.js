// FUNCTION getComputerChoice RETURNS "rock" OR "paper" OR "scissors" randomly
//     Create variable randNumber
//     Create variable choiceString
//     Generate random integer from 0 to 2 and assign it to randNumber
//     CASE OF randNumber
//         CASE 0:
//             Assign "rock" to choiceString
//         CASE 1:
//             Assign "paper" to choiceString
//         CASE 2:
//             Assign "scissors" to choiceString
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
console.log(getComputerChoice());