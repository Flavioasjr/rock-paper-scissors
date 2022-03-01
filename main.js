function computerPlay() {
    const game = ['Rock', 'Paper', 'Scissors'];
    const numberRandom = () => parseInt(Math.random() * (3 - 0) + 0);

    return game[numberRandom()];
}

function playGame(playerSelection, computerSelection) {
    if (typeof playerSelection !== 'string' || typeof computerSelection !== 'string') return 'error';

    const player = playerSelection.toUpperCase();
    const computer = computerSelection.toUpperCase();

    if (player === 'ROCK') {
        if(computer === 'ROCK') return 'tied game';
        if(computer === 'PAPER') return `computer is ${computer}. Computer won the game`;
        if(computer === 'SCISSORS') return `computer is ${computer}. You won the game`;
    }

    if (player === 'PAPER') {
        if(computer === 'PAPER') return 'tied game';
        if(computer === 'SCISSORS') return `computer is ${computer}. Computer won the game`;
        if(computer === 'ROCK') return `computer is ${computer}. You won the game`;
    }

    if (player === 'SCISSORS') {
        if(computer === 'SCISSORS') return 'tied game';
        if(computer === 'ROCK') return `computer is ${computer}. Computer won the game`;
        if(computer === 'PAPER') return `computer is ${computer}. You won the game`;
    }

    return 'error';
}



const computerSelection = computerPlay();
const playerSelection = 'scissors';
const winner = playGame(playerSelection, computerSelection);

console.log(winner);