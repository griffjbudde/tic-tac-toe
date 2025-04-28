let getPlayers = function () {
    let inputOne = document.querySelector("#player-one");
    let inputTwo = document.querySelector("#player-two");
    player1 = inputOne.value;
    player2 = inputTwo.value;
    return player1, player2;
};

let makeGameboard = function () {
    gameboard = {
        a1: 0,
        a2: 0,
        a3: 0,
        b1: 0,
        b2: 0,
        b3: 0,
        c1: 0,
        c2: 0,
        c3: 0,
    }
    return gameboard;
}();


let winChecker = function () {
    if (gameboard.a1 === gameboard.a2 && gameboard.a2 === gameboard.a3 && gameboard.a1 + gameboard.a2 + gameboard.a3 > 0) {
        return gameOver = true;
    } else if (gameboard.b1 === gameboard.b2 && gameboard.b2 === gameboard.b3 && gameboard.b1 + gameboard.b2 + gameboard.b3 > 0) {
        return gameOver = true;
    } else if (gameboard.c1 === gameboard.c2 && gameboard.c2 === gameboard.c3 && gameboard.c1 + gameboard.c2 + gameboard.c3 > 0) {
        return gameOver = true;
    } else if (gameboard.a1 === gameboard.b1 && gameboard.b1 === gameboard.c1 && gameboard.a1 + gameboard.b1 + gameboard.c1 > 0) {
        return gameOver = true;
    } else if (gameboard.a2 === gameboard.b2 && gameboard.b2 === gameboard.c2 && gameboard.a2 + gameboard.b2 + gameboard.c2 > 0) {
        return gameOver = true;
    } else if (gameboard.a3 === gameboard.b3 && gameboard.b3 === gameboard.c3 && gameboard.a3 + gameboard.b3 + gameboard.c3 > 0) {
        return gameOver = true;
    } else if (gameboard.a1 === gameboard.b2 && gameboard.b2 === gameboard.c3 && gameboard.a1 + gameboard.b2 + gameboard.c3 > 0) {
        return gameOver = true;
    } else if (gameboard.a3 === gameboard.b2 && gameboard.b2 === gameboard.c1 && gameboard.a3 + gameboard.b2 + gameboard.c1 > 0) {
        return gameOver = true;
    } else {
        return gameOver = false;
    }
}


let initializeButtons = function () {
    const newButton = document.querySelector("#new-button");
    const startButton = document.querySelector('#start-game-button');
    const modal = document.querySelector(".modal");
    
    newButton.addEventListener('click', () => {
        modal.style.display = "flex";    
    })
    startButton.addEventListener('click', () => {
        modal.style.display = "none";
        getPlayers();
        gameOver = false;
        playerTurn = player1;
    })
}();

let initiliazeBoard = function () {
    const gamesquare = document.getElementsByClassName('gamesquare');
    const display = document.querySelector('.display');
    var clickedSquare;
    let counter = 0
    for (let i = 0; i < gamesquare.length; i++)
    gamesquare[i].addEventListener('click', () => {
            if (playerTurn === player1 && gameOver === false) {
                clickedSquare = gamesquare[i].id;
                clickedSquareStat = gamesquare[i].textContent;
                if (clickedSquareStat == '') {
                    gamesquare[i].textContent = 'X';
                    gameboard[clickedSquare] = 1; 
                    counter++;
                } else {
                    playerTurn = player2;
                }
            } else if (playerTurn === player2 && gameOver === false) {
                clickedSquare = gamesquare[i].id;
                clickedSquareStat = gamesquare[i].textContent;
                if (clickedSquareStat == '') {
                    gamesquare[i].textContent = 'o';
                    gameboard[clickedSquare] = 2;
                    counter++;
                } else {
                    playerTurn = player1;
                }
            }
            gamesquare[i].classList.add('picked');
            winChecker()
            console.log(counter)
            console.log(playerTurn)
            if (gameOver === true) {
                display.textContent = `${playerTurn} wins! Click here to restart.`
                counter = 0;
            } else if (counter == 9) {
                gameOver = true;
                display.textContent = 'Tie! Click here to restart.'
                counter = 0;
            } else if (gameOver === false) {
                playerTurn = (playerTurn == player1) ? player2 : player1;
            }    
    })
}();

let initializeRestartButton = function () {
    const restartBtn = document.querySelector('.display');
    const gamesquare = document.getElementsByClassName('gamesquare');
    const modal = document.querySelector(".modal");
    restartBtn.addEventListener('click', () => {
        for (let i = 0; i < gamesquare.length; i++) {
            gamesquare[i].textContent = "";
            gamesquare[i].classList.remove('picked');
        }
        restartBtn.textContent = "";
        player1 = ""
        player2 = "";
        modal.style.display = 'flex';
        gameboard = {
            a1: 0,
            a2: 0,
            a3: 0,
            b1: 0,
            b2: 0,
            b3: 0,
            c1: 0,
            c2: 0,
            c3: 0,
        }
        return gameboard;
    })
}();