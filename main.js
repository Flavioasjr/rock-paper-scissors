const btn = document.querySelector('.buttons');
const body = document.querySelector('body');

function computerPlay() {
    const game = ['Rock', 'Paper', 'Scissors'];
    const numberRandom = () => parseInt(Math.random() * 3);

    return game[numberRandom()];
}

const gameResult = {
    ROCK: {
        ROCK: 'Tied game',
        PAPER: 'Computer won',
        SCISSORS: 'Player won'
    },
    PAPER: {
        ROCK: 'Player won',
        PAPER: 'Tied game',
        SCISSORS: 'Computer won'
    },
    SCISSORS: {
        ROCK: 'Computer won',
        PAPER: 'Player won',
        SCISSORS: 'Tied game'
    }
}

function playRound(playerSelection, computerSelection) {
    if (typeof playerSelection !== 'string'
        || typeof computerSelection !== 'string') return 'error';

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    return gameResult[playerSelection][computerSelection];
}

let playerScore = 0;
let computerScore = 0;

function game(e) {
    const computerSelection = computerPlay();
    const roundWinner = playRound(e.target.value, computerSelection);
    const div = document.createElement('div');
    div.classList.add('round_results');

    div.textContent += `Computer is ${computerSelection} and player is ${e.target.value}.
                            ${roundWinner} this round.`;

    if (roundWinner === 'Player won') playerScore++;
    if (roundWinner === 'Computer won') computerScore++;
    div.textContent += ` Player: ${playerScore}. Computer: ${computerScore}`;

    body.appendChild(div);

    const divTwo = document.createElement('div');
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) divTwo.textContent = 'Player won the game.'
        if (playerScore < computerScore) divTwo.textContent = 'Computer won the game.'
        body.appendChild(divTwo);
        body.removeChild(btn);
        const button = document.createElement('button');
        button.textContent = 'RESTART';
        body.appendChild(button);
        button.addEventListener('click', e => location.reload());
    }
} 

btn.addEventListener('click', game);

