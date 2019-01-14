var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// Define a Function
function sayOuch() {
	alert('Ouch! Stop poking me!');
}
 
// Use a CSS selector to identify an element
var foxImage = document.querySelector('img');
var toggle = document.getElementById('toggle')

// Assign the function to the onclick event on that element
foxImage.onclick = sayOuch;

function togg() {
	if (foxImage.style.visibility=="visible") {
		foxImage.style.visibility="hidden";
	} else {
		foxImage.style.visibility="visible";
	}
}

toggle.onclick = togg;