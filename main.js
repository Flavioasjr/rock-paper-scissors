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

    for(let choice of choices) {
        console.log(choice);
        if (choice === 'rock') buttonsClass.appendChild(rockClone);
        if (choice === 'paper') buttonsClass.appendChild(paperClone);
        if (choice === 'scissors') buttonsClass.appendChild(scissorsClone);
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

    showResult(arrayChoices);

    // if (choices === 'rock rock') {
    //     btnPaper.parentNode.removeChild(btnPaper);
    //     btnScissors.parentNode.removeChild(btnScissors);

    //     p.textContent = 'DRAW!';

    //     buttonsClass.appendChild(div);
    //     div.appendChild(p);

    //     const rockClone = btnRock.cloneNode(true);
    //     buttonsClass.appendChild(rockClone);
    // }

    // if (choices === 'rock paper') {
    //     btnScissors.parentNode.removeChild(btnScissors);

    //     p.textContent = 'LOSE!';

    //     buttonsClass.insertBefore(div, btnPaper);
    //     div.appendChild(p);
    // }

    // if (choices === 'rock scissors') {
    //     btnPaper.parentNode.removeChild(btnPaper);

    //     p.textContent = 'WIN!';

    //     buttonsClass.insertBefore(div, btnScissors);
    //     div.appendChild(p);
    // }

    // if (choices === 'paper paper') {
    //     btnRock.parentNode.removeChild(btnRock);
    //     btnScissors.parentNode.removeChild(btnScissors);

    //     p.textContent = 'DRAW!';

    //     buttonsClass.appendChild(div);
    //     div.appendChild(p);

    //     const paperClone = btnPaper.cloneNode(true);
    //     buttonsClass.appendChild(paperClone);
    // }

    // if (choices === 'paper rock') {
    //     btnScissors.parentNode.removeChild(btnScissors);

    //     p.textContent = 'WIN!';

    //     buttonsClass.insertBefore(div, btnPaper);
    //     div.appendChild(p);
    // }

    // if (choices === 'paper scissors') {
    //     btnRock.parentNode.removeChild(btnRock);

    //     p.textContent = 'LOSE!';

    //     buttonsClass.insertBefore(div, btnScissors);
    //     div.appendChild(p);
    // }

    // if (choices === 'scissors scissors') {
    //     btnRock.parentNode.removeChild(btnRock);
    //     btnPaper.parentNode.removeChild(btnPaper);

    //     p.textContent = 'DRAW!';

    //     buttonsClass.appendChild(div);
    //     div.appendChild(p);

    //     const scissorsClone = btnScissors.cloneNode(true);
    //     buttonsClass.appendChild(scissorsClone);
    // }

    // if (choices === 'scissors rock') {
    //     btnPaper.parentNode.removeChild(btnPaper);

    //     p.textContent = 'LOSE!';

    //     buttonsClass.insertBefore(div, btnScissors);
    //     div.appendChild(p);
    // }

    // if (choices === 'scissors paper') {
    //     btnRock.parentNode.removeChild(btnRock);

    //     p.textContent = 'WIN!';

    //     buttonsClass.insertBefore(div, btnScissors);
    //     div.appendChild(p);
    // }

    buttonsClass.appendChild(div);
    resetButton.textContent = 'Play Again';
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