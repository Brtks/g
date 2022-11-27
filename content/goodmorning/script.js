var txt = document.getElementById('txt');
var aut = document.getElementById('aut');
var img = document.getElementById('img');
var hide = document.getElementById('hide')

var pTitle = document.getElementById('title');
var pAuthor = document.getElementById('author');

function go() {
  pTitle.innerHTML = txt.value;
	pAuthor.innerHTML = "~ " + aut.value;
}

setInterval(go, 100)

function image1() {
	img.setAttribute("src", "goodmorning1.png");
}

function image2() {
	img.setAttribute("src", "goodmorning2.webp");
}

function image3() {
	img.setAttribute("src", "goodmorning3.webp");
}

function image4() {
	img.setAttribute("src", "goodmorning4.webp");
}