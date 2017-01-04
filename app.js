function sound(event) {
	var letter = event.keyCode;
	//?Need to figure out how to point to audio but not .key with data-key
	document.querySelector("[data-key='letter']").play();
}

window.addEventListener("keypress",sound);