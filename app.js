// Get UI elements to work with
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let gradDirection = document.getElementById('gradDir')
let currentGradient = document.getElementById('currentGradient');
let bodyGradient = document.getElementById('bodyGradient');

// Change bg on the fly
function setGradient(){
    //Build new linear-gradient string to update body style 
    // do not put a semicolon into the string otherwise the update wont occur.
    let grad = 'linear-gradient(' + gradDirection.value + ', ' +
		color1.value +
		', ' +
		color2.value +
		')';
    // Set the bod style but when setting it doesnt seem to work.
    bodyGradient.style.background = grad;
    // Update the h3 element to show user the current selection
	currentGradient.textContent = grad;
}


// Event Listeners for page
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
gradDirection.addEventListener('input', setGradient)

