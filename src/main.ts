let app = document.querySelector('#ap');

if (app !== null) {
	console.log(app.innerHTML);
}

function add(x: number, y: number) {
	return x + y;
}

console.log('2 + 5 is ', add(2, 5));
