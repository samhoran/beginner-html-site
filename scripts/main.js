var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// Define a Function
function sayOuch() {
	alert('Ouch! Stop poking me!');
}
 
// Use a CSS selector to identify an element
var foxImage = document.querySelector('img');

var appear_button = document.getElementById('appear')
var disappear_button = document.getElementById('disappear')

 
// Assign the function to the onclick event on that element
foxImage.onclick = sayOuch;

disappear_button.onclick = function(){
	foxImage.style.visibility="hidden";
}
appear_button.onclick = function(){
	foxImage.style.visibility="visible";
}


// for second bonus: use if statement