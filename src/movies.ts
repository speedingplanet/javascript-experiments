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

export interface Movie {
	id: string;
	title: string;
	genre?: string; // Maybe an enum later?
	length?: number; // int for number of minutes
	year?: number; // int for year number
}

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

async function fetchMovies(): Promise<Array<Movie>> {
	try {
		let moviesURL = 'http://localhost:5500/movies';
		let response = await fetch(moviesURL);

		if (response.ok) {
			let movies = await response.json() as Array<Movie>;
			return movies;
		} else {
			throw new Error(`Bad response: ${response.status}`);
		}
	} catch (error) {
		console.error('Could not fetch movie data because', error);
		throw error;
	}
}

async function init() {
	console.log('Inside init(), about to call fetchMovies()');
	let movies = await fetchMovies();
	console.log('Inside init(), finished calling fetchMovies()');

	let moviesGrid = document.querySelector('.movies-grid');
	if (moviesGrid) {
		renderToGrid(moviesGrid, movies);
	}
}

console.log('Before calling init()');
init();
console.log('After calling init();');
