// When the user clicks on the "Greet" button
let button = document.querySelector('.form-grid button');

if (button !== null) {
	button.addEventListener('click', () => {
		let firstNameField = document.querySelector<HTMLInputElement>('#first-name');
		let output = document.querySelector('#output');
		if (output) {
			output.textContent = `Hello, ${firstNameField?.value}`;
		}
	});
}
