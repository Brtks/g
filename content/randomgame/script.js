var secretNum = parseInt(Math.random() * 11);	

var input = document.getElementById('number');
var doneButton = document.getElementById('done-button');
var wr = document.getElementById('wr');
var hintBtn = document.getElementById('hint-btn')
var giveBtn = document.getElementById('give-btn')
var hintTxt = document.getElementById('hint-txt');
var tries = 11


function done() {
	if (parseFloat(input.value) != secretNum) {
		wr.innerHTML = "Wrong!"
		hintBtn.style.display = "inline-block";
		giveBtn.style.display = "auto";
		hintTxt.innerHTML = "";
		tries = tries - 1;
	} else if (parseFloat(input.value) == secretNum) {
		wr.innerHTML = "your luck: " + tries + "/10"
		hintBtn.style.display = "none";
		giveBtn.style.display = "none";
		doneButton.style.display = "none";
		hintTxt.innerHTML = ""

		setInterval(reload, 1500)
	}
}
function reload() {
	window.location.href = "/content/randomgame"
}

function hint() {
	if (parseFloat(input.value) > secretNum) {
		hintTxt.innerHTML = input.value + " is bigger than the secret number!"
	} else if (parseFloat(input.value) < secretNum) {
		hintTxt.innerHTML = input.value + " is smaller than the secret number!"
	} else if (parseFloat(input.value) == secretNum) {
		hintTxt.innerHTML = ""
		tries = tries - 1
	}
}

function give() {
	hintBtn.style.display = "none";
	giveBtn.style.display = "none";
	doneButton.style.display = "none";
	hintTxt.innerHTML = ""
	wr.innerHTML = `<p id="wr">The secret number was <f style="color: #afa; font-family: 'Poppins'">${secretNum}</f>, reloading...</p>`

	setInterval(reload, 1500)
}
