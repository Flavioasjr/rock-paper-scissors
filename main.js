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

btn.addEventListener('click', e => {
    const computerSelection = computerPlay();
    const winnerRound = playRound(e.target.value, computerSelection);
    const div = document.createElement('div');

    div.textContent += `Computer is ${computerSelection} and player is ${e.target.value}.
     ${winnerRound} this round.`;
    body.appendChild(div);
});

// function game() {
//     let game;
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         let computerSelection = computerPlay();
//         let playerSelection = prompt('Choose rock, paper or scissors');
//         computerSelection = computerSelection.toUpperCase();
//         playerSelection = playerSelection.toUpperCase();

//         if(playerSelection !== 'ROCK' && 
//         playerSelection !== 'PAPER' && 
//         playerSelection !== 'SCISSORS') return alert('Invalid value');

//         game = playRound(playerSelection, computerSelection);

//         console.log(game);

//         if(game === 'Player won') playerScore++;
//         if(game === 'Computer won') computerScore++;
//         console.log('Player:', playerScore);
//         console.log('Computer:', computerScore);
//     }

//     if (playerScore > computerScore) return `Player won.`
//     if (playerScore < computerScore) return `Computer won.`
//     return 'Tied game';
// }

// const winner = game();

// console.log(winner);