// Placeholder
console.log('Learning about functions!');

add(2, 3);

// Function declaration: hoisted
function add(x, y) {
	return x + y;
}

// Function assignment: NOT hoisted
let assignedAdd = function (x, y) {
	return x + y;
};

assignedAdd(2, 4);

// Arrow functions
let addArrow = (x, y) => {
	return x + y;
};

let addArrowShort = (x, y) => x + y;

// function MyCustomButton() {
// let MyCustomButton = function() {
let MyCustomButton = () => {
	//  Do stuff
	return (
		// Some HTML goes here
		0
	);
};

function calculator(operator, left, right) {
	return operator(left, right);
}

calculator(add, 5, 10);
