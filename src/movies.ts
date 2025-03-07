// Placeholder
/*
To start:
title
genre
length
year

Soon:
Actors
rating (how many stars)
restriction (PG, PG-13)
*/

interface Movie {
	id: string;
	title: string;
	genre?: string; // Maybe an enum later?
	length?: number; // int for number of minutes
	year?: number; // int for year number
}

let movies: Array<Movie> = [
	{
		id: '1',
		title: 'Wicked',
		genre: 'Fantasy',
		length: 160,
		year: 2024,
	},
	{
		id: '2',
		title: 'The Super Mario Bros. Movie',
		genre: 'Animation',
		length: 92,
		year: 2023,
	},
	{
		id: '3',
		title: 'The Little Mermaid',
		genre: 'Fantasy',
		length: 80,
		year: 1989,
	},
	{
		id: '4',
		title: 'Training Day',
		genre: 'Thriller, Crime', // Multiple genres?
		length: 122,
		year: 2001,
	},
];

function renderToGrid(target: Element, movies: Array<Movie>) {
	/*
	Input is a Movie object
	Output is 
				<div class="movie-row">
					<div class="movie-title">Wicked</div>
					<div class="movie-genre">Fantasy</div>
					<div class="movie-year">2024</div>
					<div class="movie-length">160</div>
				</div>
	Then append the rows to the target
	*/

	let rows = movies.map((movie) => {
		let row = document.createElement('div');
		row.classList.add('movie-row');
		row.insertAdjacentHTML('beforeend', `<div class="movie-title">${movie.title}</div>`);
		row.insertAdjacentHTML('beforeend', `<div class="movie-genre">${movie.genre}</div>`);
		row.insertAdjacentHTML('beforeend', `<div class="movie-year">${movie.year}</div>`);
		row.insertAdjacentHTML('beforeend', `<div class="movie-length">${movie.length}</div>`);
		return row;
	});

	// Add all the rows to .movies-grid at once
	target.append(...rows);
}

async function fetchMovies() {
	let moviesURL = 'http://localhost:5500/movies';
	try {
		let response = await fetch(moviesURL);

		// True if we get back a 200-399 response
		if (response.ok) {
			// Process data
		} else {
			// Response of 400-599
			throw new Error(`Bad response: ${response.status}`);
		}

	} catch (error) {
		console.error('Could not fetch movie data because', error);
	}
}

let moviesGrid = document.querySelector('.movies-grid');
if (moviesGrid) {
	renderToGrid(moviesGrid, movies)
}

