const game = document.querySelector(".game")
const dino = document.querySelector('.game__dino');
const cactus = document.querySelector('.game__cactus');
let score = document.querySelector('.game__score-current');
let record = document.querySelector('.game__score-record span');
let scoreCounter;
let currentScore = 0;
let bestScore;



document.addEventListener("keydown", function(e) {
    if (e.keyCode == 32 && game.classList.contains("play")) {
        dinoJump(); 
    }
    else {
    	 startGame();
    }
});

function startGame() {
    if (!game.classList.contains("play")) {
        game.classList.toggle('play');
        startScore();
    }
    
}

function stopGame() {
    game.classList.remove('play');
    clearInterval(scoreCounter);
    calcHighScore();
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
        alert("GAME OVER");
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

function calcHighScore() {
	if (bestScore > currentScore) {
		record.innerHTML = bestScore;
		currentScore = bestScore;
	}
}