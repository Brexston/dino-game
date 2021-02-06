const dino = document.querySelector('.game__dino');
const cactus = document.querySelector('.game__cactus');

document.addEventListener("keydown", function(e) {
  	if (e.keyCode == 32) {
        dinoJump();
    }
});

function dinoJump() {
	if(!dino.classList.contains("jump")) {
    	dino.classList.add('jump');
    }

    setTimeout(function() {
    	dino.classList.remove('jump');
    }, 800);
}
