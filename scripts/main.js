var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// Define a Function
function sayOuch() {
	alert('Ouch! Stop poking me!');
}
 
// Use a CSS selector to identify an element
var foxImage = document.querySelector('img');
// var toggle = document.getElementById('toggle')
var appear = document.getElementById('appear')
var disappear = document.getElementById('disappear')



// Assign the function to the onclick event on that element
foxImage.onclick = sayOuch;



// The two-button version I had before was a little
// slow--needed extra clicking--so here's a better
// version

function app() {
	foxImage.style.display='block'
}

function disapp() {
	foxImage.style.display='none'
}

appear.onclick = app;
disappear.onclick = disapp;

// function togg() {
// 	if (foxImage.style.display=="block") {
// 		foxImage.style.display="none";
// 	} else {
// 		foxImage.style.display="block";
// 	}
// }

// toggle.onclick = togg;