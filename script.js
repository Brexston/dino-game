const game = document.querySelector(".game")
const dino = document.querySelector('.game__dino');
const cactus = document.querySelector('.game__cactus');
let score = document.querySelector('.game__score-current');
let record = document.querySelector('.game__score-record span');
let gameOver = document.querySelector('.game__end');
let scoreCounter;
let bestScore;

if (!localStorage.bestScore) {
	localStorage.bestScore = 0
}
record.innerHTML = localStorage.bestScore;

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 32 && game.classList.contains("play")) {
        dinoJump();
    } 
    else {
        startGame();
    }
});

gameOver.addEventListener('click', function() {
	startGame();
});

function startGame() {
    if (!game.classList.contains("play")) {
        game.classList.toggle('play');
        gameOver.classList.remove('active')
        startScore();
    }

}

function stopGame() {
    game.classList.remove('play');
    clearInterval(scoreCounter);
    calcBestScore();
    gameOver.classList.add('active');
}

function dinoJump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.toggle('jump');
    }

    setTimeout(function() {
        dino.classList.toggle('jump');
    }, 800);
}

setInterval(function() {
    let dinoPosition = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusPosition = parseInt(window.getComputedStyle(cactus).getPropertyValue('right'));

    if (cactusPosition > 450 && cactusPosition < 525 && dinoPosition >= -45) {
        stopGame();
    }

}, 100);


function startScore() {
    let i = 0;
    scoreCounter = setInterval(function() {
        i++
        bestScore = i;
        score.innerHTML = i;
    }, 200);
}

function calcBestScore() {
    if (bestScore > localStorage.bestScore) {
        record.innerHTML = bestScore;
        localStorage.bestScore = bestScore;
    }
}