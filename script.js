const dino = document.querySelector('.game__dino');
const cactus = document.querySelector('.game__cactus');

document.addEventListener("keydown", function(e) {
  	if (e.keyCode == 32) {
        dinoJump();
    }
});

function dinoJump() {
	if(!dino.classList.contains("jump")) {
    	dino.classList.toggle('jump');
    }

    setTimeout(function() {
    	dino.classList.toggle('jump');
    }, 800);
}

setInterval(function() {
	let dinoPosition = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
	let cactusPosition = parseInt(window.getComputedStyle(cactus).getPropertyValue('right'));
	
	if (cactusPosition > 440 && cactusPosition < 525 && dinoPosition >= -45) {
		alert('Dead')
	}

}, 100);