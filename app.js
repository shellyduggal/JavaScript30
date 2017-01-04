function play(event) {
	//associate pressed key (event) with html elements
	var sound = document.getElementById(event.keyCode);
	var letter = document.querySelector(`.key[data-key="${event.keyCode}"]`); 
	//play the sound
	sound.play();
	//highlight the letter on-screen
	letter.classList.add('playing');
	//reset sound
	sound.currentTime = 0;
	//reset highlight
	letter.addEventListener('transitionend', function() {
		letter.classList.remove('playing');
	});
	
}

window.addEventListener("keydown",play);



//REQS: 
//1. SOUNDS 
//2. HIGHLIGHT 
//3. RESET
//4. REFINE