let getPlayers = function () {
    player1 = prompt("Please enter the name of player one.")
    player2 = prompt("Please enter the name of player two.")
    return player1, player2;
}();

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

let playerOneChoice = function () {
    choice = prompt(`${player1}, please make your pick`)
    if (gameboard[choice] != 0) {
        choice = prompt("already picked, pick again");
        return gameboard[choice] = 1;
        } else {
    return gameboard[choice] = 1;
    }
}

let playerTwoChoice = function () {
    choice = prompt(`${player2}, please make your pick`)
    if (gameboard[choice] != 0) {
    choice = prompt("already picked, pick again");
    return gameboard[choice] = 2;
    } else {
    return gameboard[choice] = 2;
    }
}

let winChecker = function () {
    if (gameboard.a1 === gameboard.a2 && gameboard.a2 === gameboard.a3 && gameboard.a1 + gameboard.a2 + gameboard.a3 > 0) {
        alert("gameover")
        return gameOver = true;
    } else if (gameboard.b1 === gameboard.b2 && gameboard.b2 === gameboard.b3 && gameboard.b1 + gameboard.b2 + gameboard.b3 > 0) {
        alert("gameover")
        return gameOver = true;
    } else if (gameboard.c1 === gameboard.c2 && gameboard.c2 === gameboard.c3 && gameboard.c1 + gameboard.c2 + gameboard.c3 > 0) {
        alert("gameover")
        return gameOver = true;
    } else if (gameboard.a1 === gameboard.b1 && gameboard.b1 === gameboard.c1 && gameboard.a1 + gameboard.b1 + gameboard.c1 > 0) {
        alert("gameover")
        return gameOver = true;
    } else if (gameboard.a2 === gameboard.b2 && gameboard.b2 === gameboard.c2 && gameboard.a2 + gameboard.b2 + gameboard.c2 > 0) {
        alert("gameover")
        return gameOver = true;
    } else if (gameboard.a3 === gameboard.b3 && gameboard.b3 === gameboard.c3 && gameboard.a3 + gameboard.b3 + gameboard.c3 > 0) {
        alert("gameover")
        return gameOver = true;
    } else if (gameboard.a1 === gameboard.b2 && gameboard.b2 === gameboard.c3 && gameboard.a1 + gameboard.b2 + gameboard.c3 > 0) {
        alert("gameover")
        return gameOver = true;
    } else if (gameboard.a3 === gameboard.b2 && gameboard.b2 === gameboard.c3 && gameboard.a3 + gameboard.b2 + gameboard.c1 > 0) {
        alert("gameover")
        return gameOver = true;
    } else {
        return gameOver = false;
    }
}

let playRound = function () {
    playerOneChoice();
    winChecker();
    playerTwoChoice();
    winChecker();
    console.log(gameboard);
};

let game = function () {
    gameOver = false;
    while (gameOver === false) {
        playRound();
    }
}();