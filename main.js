const restartButton = document.createElement('button');

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

const displayChoices = {
    ROCK: {
        ROCK: 'rock rock',
        PAPER: 'rock paper',
        SCISSORS: 'rock scissors'
    },
    PAPER: {
        ROCK: 'paper rock',
        PAPER: 'paper paper',
        SCISSORS: 'paper scissors'
    },
    SCISSORS: {
        ROCK: 'scissors rock',
        PAPER: 'scissors paper',
        SCISSORS: 'scissors scissors'
    }
}

function showResult(choices) {
    const rockClone = btnRock.cloneNode(true);
    const paperClone = btnPaper.cloneNode(true);
    const scissorsClone = btnScissors.cloneNode(true);

    btnPaper.parentNode.removeChild(btnPaper);
    btnScissors.parentNode.removeChild(btnScissors);
    btnRock.parentNode.removeChild(btnRock);

    for(let i = 0; i < choices.length; i++) {
        if (choices[i] === 'rock') {
            buttonsClass.appendChild(rockClone); 
            if (i === 1) {
                if (choices[0] === 'rock') {
                    const rockClone2 = rockClone.cloneNode(true);
                    buttonsClass.appendChild(rockClone2);
                    return rockClone2;
                }
                return rockClone; 
            }
        } 
        if (choices[i] === 'paper') {
            buttonsClass.appendChild(paperClone);
            if (i === 1) {
                if (choices[0] === 'paper') {
                    const paperClone2 = paperClone.cloneNode(true);
                    buttonsClass.appendChild(paperClone2);
                    return paperClone2;
                }
                return paperClone; 
            }
        }
        if (choices[i] === 'scissors') {
            buttonsClass.appendChild(scissorsClone);
            if (i === 1) {
                if (choices[0] === 'scissors') {
                    const scissorsClone2 = scissorsClone.cloneNode(true);
                    buttonsClass.appendChild(scissorsClone2);
                    return scissorsClone2;
                }
                return scissorsClone; 
            }
        }
    }
}

function gameDisplay(playerSelection, computerSelection, gameWinner, playerScore, computerScore) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    const results = document.querySelector('.results');
    

    const choices = displayChoices[playerSelection][computerSelection];
    const arrayChoices = choices.split(' ');

    const div = document.createElement('div');
    const resetButton = document.createElement('button');
    const p = document.createElement('p');

    const buttonComputerSelection = showResult(arrayChoices);
    
    if (arrayChoices[0] === arrayChoices[1]) p.textContent = 'DRAW';
    
    if (choices === 'rock paper' || choices === 'paper scissors' || 
    choices === 'scissors rock') p.textContent = 'LOSE';

    if (choices === 'rock scissors' || choices === 'paper rock' ||
    choices === 'scissors paper') p.textContent = 'WIN';
    
    buttonsClass.insertBefore(div, buttonComputerSelection);

    resetButton.textContent = 'Play Again';
    div.appendChild(p);
    div.appendChild(resetButton);

    div.classList.add('result-round');
    resetButton.classList.add('btn');
    resetButton.classList.add('btn-reset');

    restartButton.textContent = 'Restart Game';
    restartButton.classList.add('btn');
    restartButton.classList.add('btn-restart');
    div.appendChild(restartButton);

    resetButton.addEventListener('click', e => {
        location.reload();
    });

    if (gameWinner === 'player win') {
        p.textContent = 'You won the game!';
        resetButton.parentNode.removeChild(resetButton);
    }

    if (gameWinner === 'computer win') {
        p.textContent = 'You lost the game!';
        resetButton.parentNode.removeChild(resetButton);
    }

    const pResults = document.createElement('p');
    pResults.textContent = `PLAYER ${playerScore} X ${computerScore} COMPUTER`;

    results.appendChild(pResults);
}

let playerScore = 0;
let computerScore = 0;

function game(e) {
    if (!e.target.title) return;

    const computerSelection = computerPlay();
    const roundWinner = playRound(e.target.title, computerSelection);
    let gameWinner = '';

    let storagePlayerScore = localStorage.getItem('playerScore');
    let storageComputerScore = localStorage.getItem('computerScore');

    playerScore = Number(storagePlayerScore);
    computerScore = Number(storageComputerScore);

    if (roundWinner === 'Player won') playerScore++;
    if (roundWinner === 'Computer won') computerScore++;

    const displayPlayerScore = playerScore;
    const displayComputerScore = computerScore;

    restartButton.addEventListener('click', () => {
        localStorage.setItem('playerScore', 0);
        localStorage.setItem('computerScore', 0);
        location.reload();
    });

    if (playerScore >= 3) {
        playerScore = 0;
        computerScore = 0;
        gameWinner = 'player win';
    }

    if (computerScore >= 3) {
        playerScore = 0;
        computerScore = 0;
        gameWinner = 'computer win';
    }

    localStorage.setItem('playerScore', playerScore);
    localStorage.setItem('computerScore', computerScore);

    gameDisplay(e.target.title, computerSelection, gameWinner, displayPlayerScore, displayComputerScore);

    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
}

const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
const buttonsClass = document.querySelector('.buttons');

btnRock.addEventListener('click', game);
btnPaper.addEventListener('click', game);
btnScissors.addEventListener('click', game);