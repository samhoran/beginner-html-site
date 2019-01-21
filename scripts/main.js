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
	if (foxImage.style.display=="block") 
		foxImage.style.display="none";
	 else {
		foxImage.style.display="block";
	}
}

toggle.onclick = togg;