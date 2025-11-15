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