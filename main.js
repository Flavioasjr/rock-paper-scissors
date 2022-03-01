function computerPlay() {
    const game = ['Rock', 'Paper', 'Scissors'];
    const numberRandom = () => parseInt(Math.random() * (3 - 0) + 0);

    return game[numberRandom()];
}

function playRound(playerSelection, computerSelection) {
    if (typeof playerSelection !== 'string' || typeof computerSelection !== 'string') return 'error';

    const player = playerSelection;
    const computer = computerSelection;

    if (player === 'ROCK') {
        if (computer === 'ROCK') return `computer is ${computer}. tied game`;
        if (computer === 'PAPER') return `computer is ${computer}. Computer won.`;
        if (computer === 'SCISSORS') return `computer is ${computer}. Player won.  `;
    }

    if (player === 'PAPER') {
        if (computer === 'PAPER') return `computer is ${computer}. tied game`;
        if (computer === 'SCISSORS') return `computer is ${computer}. Computer won.`;
        if (computer === 'ROCK') return `computer is ${computer}. Player won.  `;
    }

    if (player === 'SCISSORS') {
        if (computer === 'SCISSORS') return `computer is ${computer}. tied game`;
        if (computer === 'ROCK') return `computer is ${computer}. Computer won.`;
        if (computer === 'PAPER') return `computer is ${computer}. Player won.  `;
    }

    return 'error';
}

function game() {
    // const playerSelection = 'scissors';
    let game;
    let player = 0;
    let computer = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt('Choose rock, paper or scissors');
        computerSelection = computerSelection.toUpperCase();
        playerSelection = playerSelection.toUpperCase();

        if(playerSelection !== 'ROCK' && playerSelection !== 'PAPER' && playerSelection !== 'SCISSORS') return alert('Invalid value');

        game = playRound(playerSelection, computerSelection);

        console.log(game);
        game = game.substr(-13);
        game = game.trim();

        if(game === 'Player won.') player++;
        if(game === 'Computer won.') computer++;
        console.log('Player:', player);
        console.log('Computer:', computer);
    }

    if (player > computer) return `Player won.`
    if (player < computer) return `Computer won.`
    return 'Tied game';
}

const winner = game();

console.log(winner);