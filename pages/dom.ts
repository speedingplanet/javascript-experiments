// When the user clicks on the "Greet" button
let button = document.querySelector('.form-grid button');

if (button !== null) {
	button.addEventListener('click', handleButtonClick);
}

function handleButtonClick() {
	// Get the inputs from the form fields
	let firstNameField = document.querySelector<HTMLInputElement>('#first-name');

	// Get a reference to the output element
	let output = document.querySelector('#output');

	// Write a greeting to the output element with the form field info
	if (output) {
		output.textContent = `Hello, ${firstNameField?.value}`;
	}
}

export {};